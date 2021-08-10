const mongoose = require("mongoose");

const { Schema } = mongoose;
const commentSchema = new Schema({
  contents: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  title : {
    type : String,
    required : true
  }
});

module.exports = mongoose.model("content", commentSchema);
