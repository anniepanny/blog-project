const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
require("dotenv").config();

//register end point
const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, salt),
  };
  createdUser = await User.create(user);
  res.status(201).json(createdUser);
};

//login endpoint
const loginUser = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    const passwordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (passwordValid) {
      token = jwt.sign(
        { id: user.id, email: user.email, username: user.username },
        process.env.SECRET
      );
      res.status(200).json({ token: token });
    } else {
      res.status(400).json({ error: "Password Incorrect" });
    }
  } else {
    res.status(404).json({ error: "User does not exist" });
  }
};

module.exports = { registerUser, loginUser };
