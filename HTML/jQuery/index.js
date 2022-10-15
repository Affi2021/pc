// $("h1").css("color","red");

$("h1").addClass("big-title margin-50");
// $("button").html("<em>YAHAH</em>");



// $("H1").click(function(){
// $("H1").css("color","purple");
//
// }
// );


// $("button").text("click").click(function(){
//   $("h1").css("color","purple");
// });

$("input").keypress(function(event){
  $("h1").text(event.key);
});
// $("H1").on("click",function(){
// $("H1").css("color","purple");
//
// }
// );

// for(i=0;i<5;i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color="purple";
//   })
// }

// $("h1").before("<button>Click Me</button>");


$("h1").click(function(){
$("h1").slideUp().slideDown().animate({opacity: 0.5});

}
);
