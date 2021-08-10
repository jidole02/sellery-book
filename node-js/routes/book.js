const express = require("express");
const { checkToken } = require("../middleware/tokenCheck");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Book = require("../schemas/book");
const { User } = require("../schemas/user");
const publishBook = require("../schemas/publishBook");
const content = require("../schemas/content");

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
router
  .route("/upload")
  .post(checkToken, upload2.none(), async (req, res, next) => {
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
  .route("/upload/:id")
  .get(checkToken, async (req, res, next) => {
    try {
      const book = await Book.findOne({ _id: req.params.id });
      return res.status(201).json(book);
    } catch (error) {
      console.error(error);
      next(error);
    }
  })
  .put(checkToken, upload2.none(), async (req, res, next) => {
    try {
      const date = new Date();
      const book = await Book.updateOne(
        { _id: req.params.id },
        {
          title: req.body.title,
          genre: req.body.genre,
          coverImg: req.body.coverImg,
          intro: req.body.intro,
          writerComment: req.body.writerComment,
          date: date,
        }
      );
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
  })
  .delete(checkToken, async (req, res, next) => {
    try {
      await User.findOne({ token: req.token }, (err, user) => {
        if (!user) return res.status(403);
        else {
          user
            .comparePassword(req.body.password)
            .then(async (isMatch) => {
              if (!isMatch) {
                return res.status(400).json({
                  message: "비밀번호가 일치하지 않습니다",
                });
              } else {
                await Book.deleteOne({ _id: req.body.id });
                return res
                  .status(201)
                  .json({ message: "정상적으로 삭제되었습니다." });
              }
            })
            .catch((err) => {
              res.status(400).send(err);
            });
        }
      });
      res.status(201);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.route("/publish").post(checkToken, async (req, res, next) => {
  try {
    await User.findOne({ token: req.token }, (err, user) => {
      if (!user) return res.status(403);
      else {
        user
          .comparePassword(req.body.password)
          .then(async (isMatch) => {
            if (!isMatch) {
              return res.status(400).json({
                message: "비밀번호가 틀렸습니다.",
              });
            } else {
              console.log(isMatch);
              const book = await Book.findOne({ _id: req.body.id });
              const date = new Date();
              const pBook = await publishBook.create({
                writerId: book.writerId,
                writerName: book.writerName,
                title: book.title,
                genre: book.genre,
                coverImg: book.coverImg,
                intro: book.intro,
                writerComment: book.writerComment,
                date: date,
              });
              const contentObj = await content.create({
                contents: req.body.contents,
                bookId: pBook["_id"],
                title : book.title
              });
              await Book.deleteOne({ _id: req.body.id });
              res.status(201).json({pBook,contentObj});
            }
          })
          .catch((err) => {
            console.log(err)
            next(err)
          });
      }
    });
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
