$(document).ready(function(){
    $("#owlCarouselId").owlCarousel(
        {
            
            loop:true,
            autoplay:true,
           autoplayTimeout:1000,
         autoplayHoverPause:true,
            margin:10,
           responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        }
    );
  });

  $(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
  $("body").addClass('topheader');

  }
  else {
  $("body").removeClass('topheader');

  }
  });

  $(window).scroll(function(e){ 
    var $el = $('header'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 50 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px'}); 
    }
    if ($(this).scrollTop() < 50 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
    } 
  });
