/*-----------------side bar----------------------------*/
let bgColors=["#C5D0DD","#D9E3DA","#FDA5A4","#A7BEA9","orange"]
for(var i=0;i<bgColors.length;i++)
{
  $(".color-options li").eq(i).css("background",bgColors[i])
}

$(".color-options li").click(function(){
  let currentColor=$(this).css("background-color")
  $(".change").css("color",currentColor)
})

$(".color-options img").click(function(){
  let currentBg=$(this).attr("src")
  $(".home").css({
    "background-image":`url(${currentBg})`,
    "transition":"all 1s"
  })
})

$(".color-box i").click(function(){
  let move=$(".color-options").outerWidth();
  if($(".color-box").css("left")=="0px")
  {
    $(".color-box").animate({"left":-move},1000)
  }
  else
  {
    $(".color-box").animate({"left":0},1000)
  }
})
/*-----------------side bar----------------------------*/
/*-----------------scroll----------------------------*/

let aboutOffset=$("#about").offset().top;
$(window).scroll(function(){
  let top=$(window).scrollTop();
  if(top>aboutOffset-30)
  {
    $(".navbar").css({
      "background-color":"#a79344",
      "transition":"all 1.5s"
    })
    $(".icon1").css({
      "color":"#003366",
    })
    $("#toTop").fadeIn(1000)
  }
  else
  {
    $(".navbar").css({
      "background-color":"#003366",
      "transition":"all 1.5s"
    })
    $(".icon1").css({
      "color":"#a79344",
    })
    $("#toTop").fadeOut(1000)
  }
})

$(".nav-link").click(function(){
  let currentLink=$(this).attr("href");
  let secOffset=$(currentLink).offset().top;
  $("body,html").animate({scrollTop:secOffset},1500)
})

$("#toTop").click(function(){
  $("body,html").animate({scrollTop:0},1500)
})
/*-----------------scroll----------------------------*/
/*--------------------- loading screen-----------------------  */
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});
/* -------------------loading screen ------------------------ */
/*-----------------carousel----------------------------*/

$('.carousel').carousel({
  interval: 1500,
})
/*-----------------carousel----------------------------*/
/*-----------------signer----------------------------*/

$("#signer1").click(function(){
  $("#signer-p1").slideToggle(300)
})
$("#signer2").click(function(){
  $("#signer-p2").slideToggle(300)
})
$("#signer3").click(function(){
  $("#signer-p3").slideToggle(300)
})
$("#signer4").click(function(){
  $("#signer-p4").slideToggle(300)
})
/*-----------------signer----------------------------*/
/*-----------------timer----------------------------*/

let d = new Date("March 17, 2021 11:30:59").getTime();
let x = setInterval(function(){

    let now = new Date().getTime();
    let distance = d - now;
  
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("timer1").innerHTML = days + " d"
    document.getElementById("timer2").innerHTML = hours + " h"
    document.getElementById("timer3").innerHTML = minutes + " m"
    document.getElementById("timer4").innerHTML = seconds + " s";
    if (distance < 0) 
    {
        clearInterval(x);
    }
  }, 1000);
/*-----------------timer----------------------------*/
/*-----------------text count----------------------------*/

$("#myText").keyup(function() {

    let currentChar = $("#myText").val().length;
    let character=100-currentChar;
    if(character<=0)
    {
        $("#wordCount").text("No")
    }
    else
    {
        $("#wordCount").text(character)
    }
});
/*-----------------text count----------------------------*/
/* AOS animation  */
AOS.init();
/* AOS animation  */
/* Date  */
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = `${dd} / ${mm} / ${yyyy}`;
document.getElementById("today").innerHTML=today;
/* Date  */