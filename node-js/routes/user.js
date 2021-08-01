const express = require("express");
const router = express.Router();
const User = require("../schemas/user");

router.route("/auth").post(async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
