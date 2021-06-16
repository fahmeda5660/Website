$(".search").click(function(){
  $("#search-part").slideDown()
});

$(".close").click(function(){
  $("#search-part").slideUp()
});

$(".back-to-top").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
});

// $(window).scroll(function(){
//   console.log($(window).scrollTop())
// });

$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".menu").addClass("menu-fixed")
  }else{
    $(".menu").removeClass("menu-fixed")
  }

  if($(window).scrollTop() > 600){
    $(".back-to-top").fadeIn()
  }else{
    $(".back-to-top").fadeOut()
  }
 });

$('.venobox').venobox(); 


$('.service-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-up prev"></i>',
    nextArrow: '<i class="fa fa-chevron-down next"></i>',
  });
$('.port-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,

  });
  $('.image-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    asNavFor: '.text-slider',
  });
  
  $('.text-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.image-slider',
  });
  $('.count').counterUp({
    delay: 10,
    time: 2000,
});
$('.member').venobox(); 

$('.bottom-slider').slick({
    Infinity: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    prevArrow: false,
    nextArrow: false,
    autoPlay: true,
});
