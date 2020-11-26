// swipeJS
var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  loop: true,
  // Optional parameters

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  grabCursor: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  navigation: {
    nextEl: '.--next',
    prevEl: '.--pre',
  },
  // Disable preloading of all images
  preloadImages: true,
  // Enable lazy loading
  lazy: true,
  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
var teamslider = new Swiper('.team__wrap', {
// // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
  // Disable preloading of all images
  preloadImages: true,
  // Enable lazy loading
  lazy: true,
  speed: 400,
  freeMode: true,
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
});
//  BACK TO TOp
$('#back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});
//  MY JS
// menu left
$(".header-wrap .menu").on("click", function(){
  $('.menu-left').toggleClass("active");
  $('.hamburger').toggleClass("active");
  $('main').toggleClass("active");
  $("#overlay").toggleClass("active");
})
// form đăng nhập
$(".btn .btn__login").on("click", function(){
  $('.signup').toggleClass("active");
  $("#overlay").addClass("active");
  $(".header-wrap").toggleClass("active");
  $('.menu-left').removeClass("active");
  $('main').removeClass("active");
  // $('main').hide();
})
$(".btn .btn__signin").on("click", function(){
  $('.register').toggleClass("active");
  $("#overlay").addClass("active");
  $(".header-wrap").toggleClass("active");
  $('.menu-left').removeClass("active");
  $('main').removeClass("active");
  // $('main').hide();
})
// $(".btn-menu").on("click", function(){
//   $("main").addClass("active");
//   $('.menu-left').addClass("active");
//   $("#overlay").toggleClass("active");
// })
$(".close-btn, #overlay").on("click", function(){
  $("#overlay").removeClass("active");
  $('.signup',).removeClass("active");
  $('.menu-left').removeClass("active");
  $('main').removeClass("active");
  $('.hamburger').removeClass("active");
  $('.header-wrap').removeClass("active");
  $('.register').removeClass("active");
})
// $( "#overlay",".signup", '.menu-left').keydown(function(event) {
//   if ( event.which == 27 ) {
//     this.removeClass("active");
//    }
// });
document.addEventListener('keyup', function(event) {
  if(event.key=="Escape"){
    $(".close-btn, #overlay").trigger("click")
  }
});
// multiple tab
$(".content .tab_content").hide();
$(".content .tab_content:first-child").show();

$("ul li").click(function () {

  $("ul li").removeClass("active");
  $(this).addClass("active");

  var current_tab = $(this).attr("data-list");
  $(".content .tab_content").hide();
  $("." + current_tab).show();
})
$(document).ready(function(){
    $('#tabs div').hide();
    $('#tabs div:first').show();
    $('#tabs ul li:first').addClass('active');
    $('#tabs ul li a').click(function(){ 
    $('#tabs ul li').removeClass('active');
    $(this).parent().addClass('active'); 
    var currentTab = $(this).attr('data-list'); 
    $('#tabs div').hide();
    $(currentTab).show();
    return false;
    });
    });