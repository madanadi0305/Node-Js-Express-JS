const path=require("path");
let homePage=(req,res)=>{
let pathToHtml=path.join(__dirname,"../../client/views/homePage.html");
res.sendFile(pathToHtml);
};
let aboutUs=(req,res)=>{
let pathToHtml=path.join(__dirname,"../../client/views/aboutUs.html");
res.sendFile(pathToHtml);
};
let login=(req,res)=>{
let pathToHtml=path.join(__dirname,"../../client/views/login.html");
res.sendFile(pathToHtml);
};
let signUp=(req,res)=>{
let pathToHtml=path.join(__dirname,"../../client/views/signUp.html");
res.sendFile(pathToHtml);
};

module.exports={
homePage:homePage,
aboutUs:aboutUs,
login:login,
signUp:signUp
};