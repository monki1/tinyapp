const plainTextHelloGetHandler = (_req, res) => {
  res.send("Hello!");
};

const htmlHelloGetHandler = (_req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
};

const renderHelloGetHandler = (_req, res) => {
  const templateVars = { greeting: "Hello World!" };
  res.render("hello_world", templateVars);
};





module.exports = {plainTextHelloGetHandler, htmlHelloGetHandler, renderHelloGetHandler};