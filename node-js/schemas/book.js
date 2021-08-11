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
  contents:{
    type:String,
  }
});

module.exports = mongoose.model("Book", bookSchema);
