
const cookie = require("../../src/helpers/cookie");
const users = require("../../src/database/users");
const urls = require("../../src/database/urls");

const urlsGetHandler = (req, res) => {
  const userId = cookie.getUserIDFromCookie(req);
  const user = users.getUserByID(userId);
  if (!user) {
    return res.status(400).send('You must be logged in (<a href="/login">Login</a>)');
  }
  const userUrls = urls.urlsForUser(userId);
  const templateVars = {
    urls: userUrls,
    user: user,
  };
  return res.render('urls_index', templateVars);
};




module.exports = { urlsGetHandler };




