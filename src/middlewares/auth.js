const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(400)
      .send({ msg: "Token não informado ou sem permissão" });
  }
  jwt.verify(token, "ksszn", (err, decoded) => {
    if (err) {
      console.error("erro ao decodificar", err);
      return res
        .status(400)
        .send({ msg: "Token não informado ou sem permissão" });
    }
    req.session = decoded;

    next();
  });
}

module.exports = auth;
