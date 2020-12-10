const express=require("express");
const routes=require("./backend/routes/htmlRoutes");
const app=express();
app.use("/",routes);

app.listen(5000,()=>{
console.log("Application started listening on port : ",5000);

});
module.exports=app;