module.exports.checkToken = function ensureAuthorized(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];
    req.token = bearerToken;
    next(); // 다음 콜백함수 진행
  } else {
    res.send(403);
  }
};
