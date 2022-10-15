//jshint esversion:6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
const https=require("https");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
// this is to use the css file as it is an static file and on our computer so to send it on cloud.

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  const firstName = req.body.fname;
  const lastName = req.body.lName;
  const email = req.body.email;

  // console.log(firstName, lastName, email);

  const data = {
    members: [
      {
      email_address : email,
      status : "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      }
    }]
  };
  const jsonData = JSON.stringify(data);

  const url = "https://us8.api.mailchimp.com/3.0/lists/f96fba75d0"

  const options = {
    method: "POST",
    auth :"affi:83410f5d2ad17663dd2993e35b2366f9-us8"
  }

  const request = https.request(url, options, function (response){
    if(response.statusCode === 200){
      res.sendFile(__dirname + "/success.html");
    }
    else{
      res.sendFile(__dirname + "/failure.html");

    }
      // response.on("data",function(data){
      //     console.log(JSON.parse(data));
      // })
  })

  request.write(jsonData);
  request.end();
});

app.post("/failure", function(req,res){
  res.redirect("/")
})


app.listen(process.env.PORT || 3000, function() {
  console.log("servere is there");
});



// API KEY
// 83410f5d2ad17663dd2993e35b2366f9-us8


// List ID/Audience ID
// f96fba75d0
