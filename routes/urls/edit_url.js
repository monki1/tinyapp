const urlDatabase = require('../../src/database/urls');
const users = require('../../src/database/users');

const getHandler = (req, res) =>{
  const shortURL = req.params.id;
  if (!urlDatabase.shortUrlExists(shortURL)) {
    return res.status(400).send('does not exist');
  }
  const user = users.getUserByCookie(req);
  if (!user) {
    return res.status(401).send('Please log in to edit URLs.');
  }
  console.log(user.id, shortURL);
  if (! urlDatabase.userOwnsShortURL(user.id, shortURL)) {
    return res.status(403).send('You do not have permission to edit this URL.');
  }

  const templateVars = {
    id: shortURL,
    longURL: urlDatabase.longURL,
    user: user,
  };

  return res.render('urls_show', templateVars);



};



const postHandler = (req, res) => {
  const user = users.getUserByCookie(req);
  console.log(user);
  const shortURL = req.params.id;
  console.log(user.id, shortURL, urlDatabase.userOwnsShortURL(user.id, shortURL));
  if (! urlDatabase.userOwnsShortURL(user.id, shortURL)) {
    return res.status(403).send('You do not have permission to edit this URL.');
  }
  const longURL = req.body.longURL;
  urlDatabase.update(shortURL, longURL);
  return res.redirect('/urls');

};


module.exports = {get: getHandler, post: postHandler};