const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const user = req.body;
  console.log(user)
  User
    .create(user)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ message: error.message })
    })
};

module.exports = {
  createUser
};
