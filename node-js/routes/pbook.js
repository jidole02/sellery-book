const express = require("express");
const Book = require("../schemas/book");
const { User } = require("../schemas/user");
const publishBook = require("../schemas/publishBook");

const router = express.Router();

router.route("/new").get(async (req,res,next)=>{
    try {
        const books = await publishBook.find().sort({date : 1}).limit(4);
        res.status(201).json(books)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

module.exports = router;
