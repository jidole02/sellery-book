const express = require("express");
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

router.post("/upload/img", upload.single("img"), (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
});

const upload2 = multer();
router.post("/upload", upload2.none(), async (req, res, next) => {
  try {
    const user = await User.findOne({ token: req.body.token });
    const id = user["_id"];
    const name = user.nickname;
    const book = await Book.create({
      writerId: id,
      writerName: name,
      title: req.body.title,
      genre: req.body.genre,
      coverImg: req.body.src,
      intro: req.body.intro,
      writerComment: req.body.writerComment,
    });
    return res.status(201).json(book);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
