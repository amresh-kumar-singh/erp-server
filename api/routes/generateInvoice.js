const router = require("express").Router();
const { products } = require("../config/data");

router.post("/", (req, res, next) => {
  const data = req.body;
  return res.status(201).send(data);
});

module.exports = router;
