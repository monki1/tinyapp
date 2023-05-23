const cookie = require('../src/helpers/cookie');
const users = require('../src/database/users');

const registerGetHandler = (req, res) => {
  const user = users.getUserByCookie(req);
  if (user) {
    res.redirect("/urls");
  }
  res.render('register', {user: undefined});
};

const registerPostHandler = (req, res) => {
  const { email, password } = req.body;
  // Error condition: Empty email or password
  if (!email || !password) {
    res.status(400).send('Email and password are required');
    return;
  }
  const newUser = users.createUser(email, password);
  // Error condition: Email already exists in users object
  if (newUser === undefined) {
    res.status(400).send('Email already exists');
    return;
  }
  cookie.saveUserIDtoCookie(req, newUser.id);
  res.redirect('/urls');
};

module.exports = {get: registerGetHandler, post: registerPostHandler};