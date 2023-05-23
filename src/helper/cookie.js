

const getUserIDFromCookie = (req)=>{
  return req.session.user_id;
};

module.exports = {getUserIDFromCookie};