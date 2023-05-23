const {plainTextHelloGetHandler, htmlHelloGetHandler, renderHelloGetHandler} = require('./hello');

const helloRoutes = (app)=>{
  app.get("/hello/render", renderHelloGetHandler);
  app.get("/hello", htmlHelloGetHandler);
  app.get("/", plainTextHelloGetHandler);
};









const setUpRoutes = (app) => {
  helloRoutes(app); 

}






module.exports = {setUpRoutes}