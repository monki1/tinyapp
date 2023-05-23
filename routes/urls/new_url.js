


// const urlsIdGetHandler = (req, res) => {
//   const id = req.params.id;
//   const longURL = urlDatabase[id];
//   const templateVars = { id: id, longURL: longURL[id] };
//   templateVars.user = ;
//   return res.render("urls_show", templateVars);
// };

const users = require('../../src/persistence/users');
const urlDatabase = require('../../src/persistence/database');
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
