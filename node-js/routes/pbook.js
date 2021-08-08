const express = require("express");
const Book = require("../schemas/book");
const { User } = require("../schemas/user");
const publishBook = require("../schemas/publishBook");

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
    if (condition === "new") {
      const books = await publishBook.find().sort({ date: -1 }).limit(5);
      res.status(201).json(books);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.route("/:id").get(async (req,res,next)=>{
    try {
      const id = req.params.id;
      const book = await publishBook.findOne({ _id: id });
      res.status(201).json(book);
    } catch (error) {
      console.log(error);
      next(error);
    }
})

module.exports = router;
