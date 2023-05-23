

const users = require('../src/persistence/users');
const cookie = require('../src/helpers/cookie');

const loginGetHandler = (req, res) => {
  const userID = cookie.getUserIDFromCookie(req);
  const user = users.getUserByID(userID);
  if (user) {
    
    return res.redirect('/urls');
  }

  return res.render('login', {user: user});
};

const loginPostHandler = (req, res) => {
  const {email, password} = req.body;
  const user  = users.login(email, password);
  if(!user){
    return res.status(400).send(`Invalid email or password`);
  }
  cookie.saveUserIDtoCookie(user.id);
  res.redirect('/urls');

};


module.exports = { get: loginGetHandler, post: loginPostHandler};