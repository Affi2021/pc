// const fs = require("fs");
//
// fs.copyFileSync("file1.txt","file2.txt");


var superheroes = require('superheroes');

// superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

var mySuperheroname = superheroes.random();

console.log(mySuperheroname);

var supervillains = require('supervillains');

var myVillain = supervillains.random();
//=> 'Mud Pack'

console.log(myVillain);
