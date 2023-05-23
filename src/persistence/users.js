const {generateRandomString} = require('../helpers/helper');
const encryption = require('../helpers/encryption');
const cookie = require('../helpers/cookie');



const users = {
  userRandomID: {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur",
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk",
  },
  u3randomID: {
    id: "u3randomID",
    email: "1@1.c",
    password: "1"
  },
};

const getUserByID = (userID) => {
  return users[userID];
};

const getUserByEmail = (email) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user;
    }
  }
  return undefined;
};




const createUser = (email, password) => {
  if (getUserByEmail(email) !== undefined) {
    return;
  }
  
  const userId = generateRandomString();
  const newUser = {
    id: userId,
    email: email,
    password: encryption.hashPassword(password),
  };
  users[userId] = newUser;
  return newUser;
};

const login = (email, password) => {
  const user  = getUserByEmail(email);
  console.log(user);
  if (user === undefined || encryption.comparePasswords(user.password, password)) {
    
    return;
  }
  return user;
};

//get user from cookie

const getUserByCookie = (req) => {
  const userID = cookie.getUserIDFromCookie(req);
  return getUserByID(userID);
};





//export
module.exports = {users, getUserByID, getUserByEmail, createUser, login, saveIDtoCookie: cookie.saveUserIDtoCookie, getUserByID, getUserByCookie }; //