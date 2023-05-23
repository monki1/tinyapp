


// const urlsIdGetHandler = (req, res) => {
//   const id = req.params.id;
//   const longURL = urlDatabase[id];
//   const templateVars = { id: id, longURL: longURL[id] };
//   templateVars.user = ;
//   return res.render("urls_show", templateVars);
// };

const users = require('../../src/persistence/users');
const newUrlGet = (req, res) => {
  const user = users.getUserByCookie(req);
  if (! user) {
    res.redirect("/login");
    return;
  }
  // console.log("new url");
  res.render("urls_new", {user: user});
};

const updateURLPost = (req, res) => {
  const user = users.getUserByCookie(req);
  if (! user) {
    return res.status(400).send('You must be logged in to shorten URLs');
  }
  const shorURL = req.params.id;
  //if url already exists in urlDatabase and user does not own it
  if (urlDatabase.hasOwnProperty(req.params.id) && urlDatabase[shorURL].userID !== req.session.user_id) {
    return res.status(400).send('you dont own it, can\'t change it');
  }

  const newLongURL = req.body.longURL;
  urlDatabase[shorURL].longURL = newLongURL;
  res.redirect("/urls");

};


module.exports = {get: newUrlGet, post: updateURLPost}; //
