

const users = require('../src/database/users');
const cookie = require('../src/helpers/cookie');

const loginGetHandler = (req, res) => {
  const user = users.getUserByCookie(req);
  if (user) {
    
    return res.redirect('/urls');
  }

  return res.render('login', {user: user});
};

const loginPostHandler = (req, res) => {
  const {email, password} = req.body;
  const user  = users.login(email, password);
  if (!user) {
    return res.status(400).send(`Invalid email or password`);
  }
  cookie.saveUserIDtoCookie(req, user.id);
  res.redirect('/urls');

};


module.exports = { get: loginGetHandler, post: loginPostHandler};