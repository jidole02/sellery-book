const express = require("express");
const Book = require("../schemas/book");
const { User } = require("../schemas/user");
const publishBook = require("../schemas/publishBook");
const contents = require("../schemas/content");

const router = express.Router();

router.route("/new").get(async (req, res, next) => {
  try {
    const books = await publishBook.find().sort({ date: -1 }).limit(4);
    res.status(201).json(books);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.route("/get/:condition").get(async (req, res, next) => {
  try {
    const condition = req.params.condition;
    console.log(condition);
    if (condition === "new") {
      const books = await publishBook.find().sort({ date: -1 }).limit(5);
      return res.status(201).json(books);
    }
    if (condition === "mostview") {
      const books = await publishBook.find().sort({ views: -1 }).limit(5);
      return res.status(201).json(books);
    }
    if (condition === "mostrate") {
      const books = await publishBook.find().sort({ rate: -1 }).limit(5);
      return res.status(201).json(books);
    }
    if (condition === "sub") {
      publishBook.count().exec(function (err, count) {
        var random = Math.floor(Math.random() * (count - 1));
        publishBook
          .find()
          .skip(random)
          .limit(2)
          .exec(function (err, result) {
            return res.status(201).json(result);
          });
      });
    }
    if (condition === "genre") {
      const genre = req.query.genre;
      const books = await publishBook.find({ genre: genre }).limit(5);
      return res.status(201).json(books);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.route("/getall").get(async (req, res, next) => {
  // /get/all?page=1&genre=SF판타지&sort=최신순
  const { page, genre, sort } = req.query;
  const max = 10;
  try {
    const genreObj = genre === "전체" ? {} : { genre: genre };
    const count = await publishBook.countDocuments(genreObj);
    const last = Math.ceil(count / max);
    let result;
    if (genre === "전체" && sort === "전체") {
      result = await publishBook
        .find()
        .skip((page - 1) * max)
        .limit(max);
    } else {
      if (sort === "전체") {
        result = await publishBook.find(genreObj).skip((page - 1) * 5);
      }
      if (sort === "최신순") {
        result = await publishBook
          .find(genreObj)
          .skip((page - 1) * 5)
          .limit(max)
          .sort({ date: -1 });
      }
      if (sort === "평점순") {
        result = await publishBook
          .find(genreObj)
          .skip((page - 1) * 5)
          .limit(max)
          .sort({ rate: -1 });
      }
      if (sort === "조회순") {
        result = await publishBook
          .find(genreObj)
          .skip((page - 1) * 5)
          .limit(max)
          .sort({ views: -1 });
      }
      if (sort === "과거순") {
        result = await publishBook
          .find(genreObj)
          .skip((page - 1) * 5)
          .limit(max)
          .sort({ date: 1 });
      }
    }
    return res.status(201).json({
      last: last,
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.route("/").get(async (req, res, next) => {
  try {
    const id = req.query.id;
    const book = await publishBook.findOne({ _id: id });
    res.status(201).json(book);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.route("/contents/:id").get(async (req, res, next) => {
  try {
    const id = req.params.id;
    const book = await publishBook.findOne({ _id: id });
    const contentsObj = await contents.findOne({ bookId: id });
    await publishBook.updateOne({ _id: id }, { views: book.views + 1 });
    res.status(201).json(contentsObj);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
