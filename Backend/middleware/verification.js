const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

function signInUser(data) {
  jwt.sign({ data }, secret, { expiresIn: "30d" }, (err, token) => {
    if (err) {
      return err;
    }
    return token;
  });
}

module.exports = { verifyToken, signInUser };
