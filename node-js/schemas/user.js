const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;
const userSchema = new Schema({
  nickname: {
    type: String,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 200,
  },
  token: {
    type: String,
  },
});

userSchema.pre("save", function (next) {
  let user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword) {
  return bcrypt
    .compare(plainPassword, this.password)
    .then((isMatch) => isMatch)
    .catch((err) => err);
};

userSchema.methods.generateToken = function () {
  const token = jwt.sign({ test: this._id.toHexString() }, "secretToken", {
    expiresIn: "24h",
  });
  this.token = token;
  return this.save()
    .then((user) => user)
    .catch((err) => err);
};

userSchema.methods.checkToken = function (token) {
  try {
    const check = jwt.verify(token, "secretToken");
    if (check) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
// verification ? true : false

const User = mongoose.model("User", userSchema);

module.exports = { User };
