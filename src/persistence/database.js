const {generateRandomString} = require('../helpers/helper');

const urlDatabase = {
  b6UTxQ: {
    longURL: "https://www.tsn.ca",
    userID: "aJ48lW",
  },
  i3BoGr: {
    longURL: "https://www.google.ca",
    userID: "aJ48lW",
  },
};



const urlsForUser = (userID) => {
  const filteredURLs = {};
  for (const shortURL in urlDatabase) {
    if (urlDatabase[shortURL].userID === userID) {
      filteredURLs[shortURL] = urlDatabase[shortURL];
    }
  }
  return filteredURLs;
};

const shortUrlExists = (short) => {
  return urlDatabase[short] !== undefined;
};

const userOwnsShortURL = (userID, short) => {
  // console log both
  console.log(userID, urlDatabase[short].userID, this);
  return userID == urlDatabase[short].userID;
};

const shorten = (long, userID) => {
  const urlObject  = {
    longURL: long,
    userID: userID,
  };
  let short = generateRandomString();
  while (shortUrlExists(short)) {
    short = generateRandomString();
  }
  urlDatabase[short] = urlObject;
  return urlObject;
  // console.log(urlDatabase);
  // console.log(urlDatabase[short]);
};

const getLongURL = (shortURL) => {
  // console.log(urlDatabase[shortURL]);
  return urlDatabase[shortURL].longURL;
};

const update = (shortURL, longURL) =>{
  urlDatabase[shortURL].longURL = longURL;
}

module.exports = {urlsForUser, shortUrlExists, userOwnsShortURL, newURL: shorten, getLongURL, databse: urlDatabase, update};


