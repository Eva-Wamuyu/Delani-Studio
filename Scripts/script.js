


//styling the what we do section. Center aligned and bold header
$('.info').css("textAlign","center");
$('.info-h4').css("font-weight","bold")

// Adding backgrounds to the portfolio section
let portfolioBackgrounds = ["work1.jpg","work2.jpg","work3.jpg","work4.jpg","work5.jpg","work6.jpg","work7.jpg","work8.jpg"];
let portfolioClasses = ["one","two","three","four","five","six","seven","eight"];
const addBackgrounds = ()=>{
  for(var count=0; count<portfolioBackgrounds.length; count++){
  
    $("."+ portfolioClasses[count]+"").css("background-image","url(.../Assets/"+portfolioBackgrounds[count]);
  
  }

}
// addBackgrounds();
//End of addition of backgrounds
// Toggling waht we do icons
let clickIds = ["click1","click2","click3"];
let whatWeDoContentId = ["design","development", "productMgt"];
let whatWeDoLogoClasses = ["logo1","logo2","logo3"];
//toggling function to be invoked on click
const toggling = (a, b)=>{
  $("#"+a+"").toggle();
  $("."+b+"").toggle();
}
$("#"+clickIds[0]+"").click(function(){
  toggling(whatWeDoContentId[0],whatWeDoLogoClasses[0]);

})
$("#"+clickIds[1]+"").click(function(){
  toggling(whatWeDoContentId[1],whatWeDoLogoClasses[1]);

})
$("#"+clickIds[2]+"").click(function(){
  toggling(whatWeDoContentId[2],whatWeDoLogoClasses[2]);
})
  
//the hover feature on the portfolio page

let workIds = ["work1","work2","work3","work4","work5","work6","work7","work8"];

const functionOnInHover = (a)=>{
  $("#"+ a+"").slideDown();
  $("#"+ a+"").show();
}
const functionOnOutHover = (a)=>{
  $("#"+a+"").hide([200]);
}      
const display = (a,b)=>{
  $("."+a+"").hover(function(){
    functionOnInHover(b)},function(){
      functionOnOutHover(b)});

}
//assigning each class to the hover function
for(var x=0; x<portfolioClasses.length; x++)
{
  display(portfolioClasses[x],workIds[x]);
}



//form validation and form behaviour
let form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  if($("#name").val().length < 2){

    $("#alert").show();
  }
  else if($("#mail").val().length == 0){
    $("#alert2").show();
  }
  else if ($("#msg").val().length < 8){
    $("#alert3").show();

  }
  else{
    $(".formSuccess").toggle();
    $(".formdiv").toggle();
    $("p.successMessage").text(`Thank You ${$("#name").val()}.
    We have received your message.`);

  }

});
//the closing success button
$("#close").click(function(){
  document.getElementById("form").reset();
  $(".formSuccess").hide();
  $(".formdiv").show();
  $("#alert").hide();
  $("#alert2").hide();
  $("#alert3").hide();


});

