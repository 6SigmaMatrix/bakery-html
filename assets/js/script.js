
var nav = document.getElementById("nav-menu");
  function showmenu(){
    nav.style.right= "0";
  }
   function hideMenu(){
    nav.style.right= "-100%";
  }




var navres = document.getElementById("nav-menu-toogle");
  var bar=document.getElementById("bar");
  bar.addEventListener('click',()=>{
    navres.classList.toggle('activemenu');
  })





$(document).ready(function(){
$('.owl-pancake').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     smartSpeed:800,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
 $( ".owl-prev").html('<i class="fa-solid fa-angle-left"></i>');
    $( ".owl-next").html('<i class="fa-solid fa-angle-right"></i>');
    });