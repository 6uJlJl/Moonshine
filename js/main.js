// Управление МЕНЮ
// var navbar = document.querySelector(".header__nav");
// var sticky = navbar.offsetTop;

// $(window).scroll(function(){
//   if ($(window).width()>1024) {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky")
//     } else {
//       navbar.classList.remove("sticky");
//     };
//   }
// })

$(".header__burger").click (function(){
  $(".header__burger").toggleClass("header__burger--active")
  $(".header__nav").toggleClass("show")
})
$(".header__nav li").click (function(){
  $(".header__burger").toggleClass("header__burger--active")
  $(".header__nav").toggleClass("show")
})
$("body").click (function(event){
  if (!($(".header__nav ul").hasClass("show"))){
    if (!(event.target.parentNode.parentNode.classList.contains("header__nav")||event.target.parentNode.classList.contains("header__nav"))) {
      $(".header__nav ul").removeClass("show")
    }
  }

})

// СЛАЙДЕРЫ

$('.dymka-15l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.dymka-15l-big-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
$('.dymka-15l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.dymka-15l-small-slider'
});

$('.germany-14l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.germany-14l-big-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
$('.germany-14l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.germany-14l-small-slider'
});

$('.wein4-12l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.wein4-12l-big-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
$('.wein4-12l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.wein4-12l-small-slider'
});

$('.wein4pro-20l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.wein4pro-20l-big-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
$('.wein4pro-20l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.wein4pro-20l-small-slider'
});

$('.wein5-20l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.wein5-20l-big-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
$('.wein5-20l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.wein5-20l-small-slider'
});

$('.wein5pro-37l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.wein5pro-37l-big-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
$('.wein5pro-37l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.wein5pro-37l-small-slider'
});



