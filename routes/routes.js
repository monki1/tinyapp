const {plainTextHelloGetHandler, htmlHelloGetHandler, renderHelloGetHandler} = require('./hello');
const { urlsGetHandler } = require('./urls/urls');
const registerHandler = require('./register');
const logout = require('./logout');
const login = require('./login');
const newURL = require('./urls/new_url');
const redirect = require('./redirect');
const edit = require('./urls/edit_url');
const deleteURL = require('./urls/delete_url');
const helloRoutes = (app)=>{
  app.get("/hello/render", renderHelloGetHandler);
  app.get("/hello", htmlHelloGetHandler);
  app.get("/", plainTextHelloGetHandler);
};

const urlRoutes = (app)=>{
  app.get("/urls/new", newURL.get);
  app.post("/urls", newURL.post);
  app.get("/urls", urlsGetHandler);
  app.post('/urls/:shortURL/delete', deleteURL.post);
};

const registerRoutes = (app)=>{
  app.get("/register", registerHandler.get);
  app.post("/register", registerHandler.post);
};

const setUpRoutes = (app) => {
  helloRoutes(app);
  urlRoutes(app);
  registerRoutes(app);
  //logout
  app.get("/logout", logout.getHandler);
  app.get("/login", login.get);
  app.post("/login", login.post);
  app.get('/urls/:id', edit.get);
  app.post('/urls/:id', edit.post);

  app.get('/u/:id', redirect.get);
};






module.exports = { setUpRoutes };