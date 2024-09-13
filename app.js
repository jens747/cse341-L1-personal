const express = require("express");
// const { displayName } = require("./controllers");  *if no routes
const app = express();
// const router = express.Router();                   *if no routes
const port = process.env.PORT || 3000;

// Response for the site home page
// router.get("/home", displayName);                  *if no routes
app.use("/", require("./routes"));                  //*use w/routes dir

// app.use("/", router);                              *if no routes

// Open port 3000 to test the app in a browser
app.listen(port, () => {
  console.log("Web Server is listening at port " + (port));
});