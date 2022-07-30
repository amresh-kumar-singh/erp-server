const router = require("express").Router();
const { products } = require("../config/data");

router.get("/", (req, res, next) => {
  return res.status(200).send(products);
});

module.exports = router;
