const express=require('express');
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

const https= require('https');

app.get("/",function(req,res){

res.sendFile(__dirname + "/index.html");

});

app.post("/",function(req,res){

  const cityNameUser=req.body.cityName;
  const apikey="715f2aec047cefc6e605f8630c0373f7";
  const units="metric";
  const url="https://api.openweathermap.org/data/2.5/weather?q="+cityNameUser+"&appid="+apikey+"&units="+units;
  console.log(req.body.cityName);

  https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
      var weather=JSON.parse(data);
      // console.log(weather);
      const temp = weather.main.temp
      console.log(temp)
      const discription= weather.weather[0].description
      console.log(discription)
      const icon= weather.weather[0].icon
      const iconUrl="https:openweathermap.org/img/wn/"+icon+"@2x.png";
      console.log(iconUrl);

      res.write("<h1>the temperature in "+cityNameUser+" is "+ temp +"</h1>");
      res.write("<h1>It is fucking "+ discription +"</h1>");
      res.write("<img src="+iconUrl+" >");
      res.write("<h2>It is fucking "+ iconUrl +"</h2>");
      res.send();

    });
  });
});

// https.get(url,function(response){
//   console.log(response.statusCode);
//   response.on("data", function(data){
//     var weather=JSON.parse(data);
//     // console.log(weather);
//     const temp = weather.main.temp
//     console.log(temp)
//     const discription= weather.weather[0].description
//     console.log(discription)
//     const icon= weather.weather[0].icon
//     const iconUrl="http:openweathermap.org/img/wn/"+icon+"@2x.png"
//     console.log(icon);
//
//     res.write("<h1>the temperature in isb is "+ temp +"</h1>");
//     res.write("<h1>It is fucking "+ discription +"</h1>");
//       res.write("<img src="+iconUrl+">");
//
//     res.send();
//   })
//
// })

app.listen(3000, function(){
  console.log("app is running at 3000");
});
