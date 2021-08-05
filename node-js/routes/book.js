const express = require("express");
const { checkToken } = require("../middleware/tokenCheck");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Book = require("../schemas/book");
const { User } = require("../schemas/user");

const router = express.Router();

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/upload/img", checkToken, upload.single("img"), (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
});

const upload2 = multer();
router.post("/upload", checkToken, upload2.none(), async (req, res, next) => {
  try {
    const user = await User.findOne({ token: req.token });
    const id = user["_id"];
    const name = user.nickname;
    const date = new Date();
    const book = await Book.create({
      writerId: id,
      writerName: name,
      title: req.body.title,
      genre: req.body.genre,
      coverImg: req.body.coverImg,
      intro: req.body.intro,
      writerComment: req.body.writerComment,
      date: date,
    });
    return res.status(201).json(book);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router
  .route("/write")
  .put(checkToken, async (req, res, next) => {
    try {
      const book = await Book.updateOne(
        { _id: req.body.id },
        { contents: req.body.contents }
      );
      return res.status(201).json(book);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(checkToken, async (req, res, next) => {
    try {
      const book = await Book.findOne({ _id: req.body.id });
      res.status(201).json({ contents: book.contents, title: book.title });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.route("/").get(checkToken, async (req, res, next) => {
  try {
    const user = await User.findOne({ token: req.token });
    const id = user["_id"];
    const books = await Book.find({ writerId: id });
    res.status(201).json(books);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
