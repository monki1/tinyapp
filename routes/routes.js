const {plainTextHelloGetHandler, htmlHelloGetHandler, renderHelloGetHandler} = require('./hello');
const { urlsGetHandler } = require('./urls/urls');
const registerHandler = require('./register');
const helloRoutes = (app)=>{
  app.get("/hello/render", renderHelloGetHandler);
  app.get("/hello", htmlHelloGetHandler);
  app.get("/", plainTextHelloGetHandler);
};

const urlRoutes = (app)=>{
  app.get("/urls", urlsGetHandler);
};

const registerRoutes = (app)=>{
  app.get("/register", registerHandler.get);
  app.post("/register", registerHandler.post);
};

const setUpRoutes = (app) => {
  helloRoutes(app);
  urlRoutes(app);
  registerRoutes(app);
  
};






module.exports = { setUpRoutes };