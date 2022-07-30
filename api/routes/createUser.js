const router = require("express").Router();
const { users } = require("../config/data");

router.post("/", (req, res, next) => {
  const User = req.body;
  if (User.userName in users) {
    return res.status(200).send(users[User.userName]);
  } else {
    users[User.userName] = {
      id: "ERB" + ((Math.random() * 1000) | 0),
      mobileNo: User.mobileNo,
    };
    return res
      .status(201)
      .send({ ...users[User.userName], userName: User.userName });
  }
});

module.exports = router;
