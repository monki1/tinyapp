
const urlDatabase = require('../../src/database/urls');
const users = require('../../src/database/users');
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