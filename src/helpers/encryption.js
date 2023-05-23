const bcrypt = require("bcryptjs");

const hashPassword = (pswd)=>{
  return bcrypt.hashSync(pswd, 10);
};

const comparePasswords = (pswd, hashPswd)=>{
  return bcrypt.compareSync(pswd, hashPswd);
};

module.exports = {hashPassword, comparePasswords};