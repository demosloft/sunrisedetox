$( document ).ready(function() {
 $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth:120,
    itemMargin:5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
   
$(function () {
thisyear = new Date().getFullYear();
$('.currentyear').text(thisyear);
});
});
