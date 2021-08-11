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
    console.log(condition)
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
