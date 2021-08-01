const express = require("express");
const router = express.Router();
const { User } = require("../schemas/user");

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

router.route("/login").post(async (req, res, next) => {
  try {
    await User.findOne({ email: req.body.email }, (err, user) => {
      console.log(user);
      if (user === null) {
        return res.json({
          login: false,
          message: "존재하지 않는 이메일입니다.",
        });
      } else {
        user
          .comparePassword(req.body.password)
          .then((isMatch) => {
            if (!isMatch) {
              return res.json({
                login: false,
                message: "비밀번호가 일치하지 않습니다",
              });
            }
            return res.json({
              login: true,
            });
          })
          .catch((err) => res.json({ login: false, err }));
      }
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
