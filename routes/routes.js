const {plainTextHelloGetHandler, htmlHelloGetHandler, renderHelloGetHandler} = require('./hello');
const { urlsGetHandler } = require('./urls/urls_get');
const helloRoutes = (app)=>{
  app.get("/hello/render", renderHelloGetHandler);
  app.get("/hello", htmlHelloGetHandler);
  app.get("/", plainTextHelloGetHandler);
};

const urlRoutes = (app)=>{
  app.get("/urls", urlsGetHandler);
}

const setUpRoutes = (app) => {
  helloRoutes(app); 
  urlRoutes(app);   
  
}






module.exports = { setUpRoutes }; 