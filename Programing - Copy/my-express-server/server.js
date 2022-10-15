//jshint esversion:6

const express = require('express');

const app = express();

app.get("/", function(req, res){

res.send("<h1>hello world</h1>");

});

app.get("/contact", function(req, res){

  res.send("Contact me on");
  console.log(res);
});

app.get("/about",function (req,res){
  res.send("panday day wich war jao");
});

app.get("/hobbies",function(req,res){
  res.send("<ul><li>App</li><li>get</li><li>soon</li></ul>"

  );
});
app.listen(3000, function(){
  console.log("server started on 3000");
});
