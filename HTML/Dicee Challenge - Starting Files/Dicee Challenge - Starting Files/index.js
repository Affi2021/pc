var dices2=Math.floor(Math.random() * 6)+1;
var dices1=Math.floor(Math.random()*6)+1;
var randomdiceimg1 = "images/dice"+dices1+".png";
var randomdiceimg2 = "images/dice"+dices2+".png";
document.querySelectorAll(".img1")[0].setAttribute("src","images/dice"+dices1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+dices2+".png");

if(dices1>dices2){
document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(dices1<dices2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
