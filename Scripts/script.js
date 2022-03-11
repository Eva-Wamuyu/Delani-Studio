


//styling the what we do section. Center aligned and bold header
$('.info').css("textAlign","center");
$('info-h4').css("font-weight","bold")




// Adding backgrounds to the portfolio section
let portfolioBackgrounds = ["work1.jpg","work2.jpg","work3.jpg","work4.jpg","work5.jpg","work6.jpg","work7.jpg","work8.jpg"];
let portfolioClasses = ["one","two","three","four","five","six","seven","eight"];
const addBackgrounds = ()=>{
  for(var count=0; count<portfolioBackgrounds.length; count++){
  
    $("."+ portfolioClasses[count]+"").css("background-image","url(../Assets/"+portfolioBackgrounds[count]);
  
  }

}
addBackgrounds();
//End of addition of backgrounds

