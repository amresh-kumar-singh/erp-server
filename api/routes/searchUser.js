const router = require("express").Router();
const { users } = require("../config/data");

router.post("/", (req, res, next) => {
  const User = req.body.name.toLowerCase();
  if (User in users) {
    return res.status(200).send(users[User]);
  } else {
    return res.status(201).send("user not found");
  }
});

module.exports = router;
