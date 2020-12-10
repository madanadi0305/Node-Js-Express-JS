const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let pathToIndexHtml = path.join(__dirname, "index.html");
  
  res.sendFile(pathToIndexHtml);
});

app.get('/aboutus',(req,res)=>{
let pathToAboutUsHtml=path.join(__dirname,"aboutUs.html");
res.sendFile(pathToAboutUsHtml);

});

app.get("/login",(req,res)=>{
let pathToLoginHtml=path.join(__dirname,"login.html");
res.sendFile(pathToLoginHtml);

});

app.get('/signup',(req,res)=>{
let pathToSignUpHtml=path.join(__dirname,"signUp.html");
res.sendFile(pathToSignUpHtml);

});

let port = 5050;

app.listen(port, () => {
  console.log("Application listening on port", port);
//console.log(__dirname);
});


module.exports = app;
