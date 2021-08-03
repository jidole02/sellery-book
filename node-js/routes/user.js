const express = require("express");
const router = express.Router();
const { User } = require("../schemas/user");

router.route("/signup").post(async (req, res, next) => {
  try {
    await User.findOne({ email: req.body.email }, async (err, user) => {
      if (user) {
        return res.status(400).json({
          message: "이미 존재하는 이메일 입니다."
        });
      } else {
        const user = await User.create(req.body);
        console.log(user);
        res.status(201).json(user);
      }
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.route("/login").post(async (req, res, next) => {
  try {
    await User.findOne({ email: req.body.email }, (err, user) => {
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
              return res.status(400).json({
                login: false,
                message: "비밀번호가 일치하지 않습니다",
              });
            }
            user
              .generateToken()
              .then((user) => {
                res.status(200).json({ login: true, token: user.token });
              })
              .catch((err) => {
                res.status(400).send(err);
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

router.route("/check").post(async (req, res, next) => {
  try {
    await User.findOne({ token: req.body.token }, (err, user) => {
      user
        ? res.json({ checked: user.checkToken(req.body.token) })
        : res.json({ checked: false });
    });
  } catch (error) {
    res.json({ checked: false });
  }
});

module.exports = router;
