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
