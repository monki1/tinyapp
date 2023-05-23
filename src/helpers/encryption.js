const bcrypt = require("bcryptjs");

const hashPassword = (pswd)=>{
  bcrypt.hashSync(pswd);
};

const comparePasswords = (pswd, hashPswd)=>{
  return bcrypt.compareSync(pswd, hashPswd);
};

module.exports = {hashPassword, comparePasswords};