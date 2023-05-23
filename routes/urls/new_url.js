const users = require('../../src/database/users');
const urlDatabase = require('../../src/database/urls');
const newUrlGet = (req, res) => {
  const user = users.getUserByCookie(req);
  if (! user) {
    res.redirect("/login");
    return;
  }
  // console.log("new url");
  res.render("urls_new", {user: user});
};

const URLsPost = (req, res) => {
  const user = users.getUserByCookie(req);
  console.log(user);
  if (! user) {
    return res.status(400).send('You must be logged in to shorten URLs');
  }
  const longURL = req.body.longURL;
  //if url already exists in urlDatabase and user does not own it


  urlDatabase.newURL(longURL, user.id);
  console.log(req.body);
  res.redirect("/urls");

};


module.exports = {get: newUrlGet, post: URLsPost}; //
