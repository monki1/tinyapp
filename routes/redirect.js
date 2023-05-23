const urlDatabase = require('../src/database/urls');


const redirectGetHandler =
(req, res) => {
  const shortUrl = req.params.id;
  console.log(shortUrl);
  try {
    console.log(urlDatabase);
    const longURL = urlDatabase.getLongURL(shortUrl);
    return res.redirect(longURL);
  } catch (e) {
    return res.status(404).send('Short URL not found');
  }
  
};

module.exports = {get: redirectGetHandler};