let portfolioBackgrounds = ["work1.jpg","work2.jpg","work3.jpg","work4.jpg","work5.jpg","work6.jpg","work7.jpg","work8.jpg"];
let portfolioClasses = ["one","two","three","four","five","six","seven","eight"];
console.log(portfolioClasses[2]);
var yoh = portfolioClasses[2];

const addBackgrounds = ()=>{
  for(var count=0; count<portfolioBackgrounds.length; count++){
  
    $("."+ portfolioClasses[count]+"").css("background-image","url(../Assets/"+portfolioBackgrounds[count]);
  
  }

}
addBackgrounds();


