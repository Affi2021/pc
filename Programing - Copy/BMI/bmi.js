//jshunt esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  entended: true
}));

app.get("/",function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post("/",function(req, res){
  var weight= Number(req.body.weight);
  var height= Number(req.body.height);
  var bmi= weight*height;
  res.send("Mote thera BMI Hai"+ bmi);
});

app.listen(3000, function(){
  console.log("server started on 3000");
});
