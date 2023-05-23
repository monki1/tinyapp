

const getUserIDFromCookie = (req)=>{
  return req.session.user_id;
};

const saveUserIDtoCookie = (req, userID)=>{
  return req.session.user_id = userID;
};

//save user ID to cookie

module.exports = {getUserIDFromCookie, saveUserIDtoCookie};