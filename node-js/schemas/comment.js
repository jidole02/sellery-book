const mongoose = require("mongoose");

const { Schema } = mongoose;
const commentSchema = new Schema({
  writerId: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  writerName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("comment", commentSchema);
