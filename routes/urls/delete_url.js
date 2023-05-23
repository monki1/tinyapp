
const urlDatabase = require('../../src/persistence/database');
const users = require('../../src/persistence/users');
const deleteHandler =  (req, res) => {
  const user = users.getUserByCookie(req);
  const shortURL = req.params.shortURL;

  if (!urlDatabase.userOwnsShortURL(user.id, shortURL)) {
    return res.status(403).send('Unauthorized access.');
  }

  urlDatabase.deleteShort(shortURL);
  res.redirect('/urls');
};

module.exports = {post: deleteHandler};