
const {getUserIDFromCookie} = require("../../src/helper/cookie"); 
const { getUserByID } = require("../../src/helper/persistence"); 





const urlsGetHandler = (req, res) => {
  const userId = getUserIDFromCookie(req);
  const user = getUserByID(userId);
  if (!user) {
    return res.status(400).send('You must be logged in (<a href="/login">Login</a>)');
  }
  const userUrls = urlsForUser(userId);
  const templateVars = {
    urls: userUrls,
    user: user,
  };
  res.render('urls_index', templateVars);
};

module.exports = { urlsGetHandler };




