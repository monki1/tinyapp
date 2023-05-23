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


const {generateRandomString} = require('../helpers/helper');
const encryption = require('../helpers/encryption');


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

//create new user (email, password)
// use
//is logged in?


//export
module.exports = {users, getUserByID, getUserByEmail, createUser }; //