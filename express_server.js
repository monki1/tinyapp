const {setUpRoutes} = require('./routes/routes');
// const {plainTextHelloGetHandler, htmlHelloGetHandler, renderHelloGetHandler} = require('./routes/hello');
const cookieSession = require('cookie-session');
const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  })
);

setUpRoutes(app);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
