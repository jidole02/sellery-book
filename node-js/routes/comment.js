const express = require("express");
const Book = require("../schemas/book");
const { User } = require("../schemas/user");
const publishBook = require("../schemas/publishBook");
const { checkToken } = require("../middleware/tokenCheck");
const comment = require("../schemas/comment");

const router = express.Router();

router
  .route("/:id")
  .post(checkToken, async (req, res, next) => {
    try {
      if (req.body.rate < 1 || req.body.rate > 5) {
        return res.status(400);
      }
      const publishBookObj = await publishBook.findOne({ _id: req.params.id });
      if (publishBookObj.rate == 0) {
        await publishBook.updateOne(
          { _id: req.params.id },
          { rate: req.body.rate }
        );
      } else {
        await publishBook.updateOne(
          { _id: req.params.id },
          {
            rate: ((publishBookObj.rate + req.body.rate) / 2).toFixed(1),
          }
        );
      }
      const user = await User.findOne({ token: req.token });
      const user_id = user["_id"];
      const user_name = user.nickname;
      const commentObj = await comment.create({
        writerId: user_id,
        writerName: user_name,
        bookId: req.params.id,
        date: new Date(),
        rate: req.body.rate,
        contents: req.body.contents,
      });
      return res.status(201).json(commentObj);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .get(async (req, res, next) => {
    try {
      const comments = await comment
        .find({ bookId: req.params.id })
        .sort({ date: -1 });
      res.status(201).json(comments);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

module.exports = router;
