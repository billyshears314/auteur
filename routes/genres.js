var express = require("express");
var router = express.Router();

const genres = [
  {
    id: "123",
    name: "Science Fiction",
  },
  {
    id: "234",
    name: "Thriller",
  },
];

router.get("/", function (req, res, next) {
  res.render("genres", { genres });
});

module.exports = router;
