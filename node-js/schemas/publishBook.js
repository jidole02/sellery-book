const mongoose = require("mongoose");

const { Schema } = mongoose;
const bookSchema = new Schema({
  writerId: {
    type: String,
    required: true,
  },
  writerName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  coverImg: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
  writerComment: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  rate: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("PublishBook", bookSchema);
