const express=require("express");
const app=express();
const path=require("path");

app.get("/",function(req,resp){
resp.sendFile(path.join(__dirname,"public/home.html"));
});
app.listen(3000);
console.log("server is running at 3000");