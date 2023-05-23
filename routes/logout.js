const logoutHandler = (req, res) => {
  req.session = null; // Clear the username cookie
  res.redirect('/urls'); // Redirect back to the /urls page
};

module.exports = { getHandler: logoutHandler };