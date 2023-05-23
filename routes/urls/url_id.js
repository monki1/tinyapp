const cookie = require("../../src/helpers/cookie");
const users = require("../../src/persistence/users");
const urls = require("../../src/persistence/database");

const urlsIdPostHandler = (req, res) => {
  const user = users.getUserByCookie(req);
  if (! user) {
    return res.status(400).send('You must be logged in to shorten URLs');
  }
  //if url already exists in urlDatabase and user does not own it
  if (urlDatabase.hasOwnProperty(req.params.id) && urlDatabase[req.params.id].userID !== req.session.user_id) {
    return res.status(400).send('you dont own it, can\'t change it');
  }
  const id = req.params.id;
  const newLongURL = req.body.longURL;
  urlDatabase[id].longURL = newLongURL;
  return res.redirect("/urls");

};