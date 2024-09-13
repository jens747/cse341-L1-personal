const express = require("express");
const { displayName } = require("./controllers");  
const app = express();
const router = express.Router();                   
const port = process.env.PORT || 3000;

// Response for the site home page
router.get("/home", displayName);                  

app.use("/", router);                              

// Open port 3000 to test the app in a browser
app.listen(port, () => {
  console.log("Web Server is listening at port " + (port));
});