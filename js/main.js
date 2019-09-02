$(window).scroll(function(){
  $(".header__burger").removeClass("header__burger--active");
  $(".header__nav").removeClass("show");
})

$(window).resize(function(){
  $(".header__burger").removeClass("header__burger--active");
  $(".header__nav").removeClass("show");
})

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

// СЛАЙДЕРЫ самогон

$('.dymka-15l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.dymka-15l-big-slider',
  dots: false,
  arrows: false,
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
  dots: false,
  arrows: false,
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
  dots: false,
  arrows: false,
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
  dots: false,
  arrows: false,
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
  dots: false,
  arrows: false,
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
  dots: false,
  arrows: false,
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

// СЛАЙДЕРЫ коптильни

$('.hanhi-10l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.hanhi-10l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.hanhi-10l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.hanhi-10l-small-slider'
});

$('.hanhi-20l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.hanhi-20l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.hanhi-20l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.hanhi-20l-small-slider'
});

$('.hanhi-30l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.hanhi-30l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.hanhi-30l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.hanhi-30l-small-slider'
});

$('.hanhi-small-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.hanhi-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.hanhi-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.hanhi-small-slider'
});

$('.cold-50l-small-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.cold-50l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.cold-50l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.cold-50l-small-slider'
});

$('.cold-32l-small-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.cold-32l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.cold-32l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.cold-32l-small-slider'
});



// Слайдеры АВТОКЛАВЫ
$('.bel-18l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.bel-18l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.bel-18l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.bel-18l-small-slider'
});

$('.bel-24l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.bel-24l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.bel-24l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.bel-24l-small-slider'
});

$('.bel-30l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.bel-30l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.bel-30l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.bel-30l-small-slider'
});

$('.av-hanhi-20l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.av-hanhi-20l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.av-hanhi-20l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.av-hanhi-20l-small-slider'
});

$('.av-fancel-23l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.av-fancel-23l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.av-fancel-23l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.av-fancel-23l-small-slider'
});

$('.av-fancel-37l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.av-fancel-37l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.av-fancel-37l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.av-fancel-37l-small-slider'
});

// Слайдеры ПИВОВАРНИ
$('.piv-wein-37l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.piv-wein-37l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.piv-wein-37l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.piv-wein-37l-small-slider'
});

$('.piv-wein-30l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.piv-wein-30l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.piv-wein-30l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.piv-wein-30l-small-slider'
});

$('.piv-bav-30l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.piv-bav-30l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.piv-bav-30l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.piv-bav-30l-small-slider'
});

// Слайдер СЫРОВАРНИ
$('.syr-15l-small-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.syr-15l-big-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$('.syr-15l-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.syr-15l-small-slider'
});

$(".item__order").on('click', function(e) {
  e.preventDefault();
  console.log ($(this).parent().find(".item__name").text())
  var string = '<form method="post" action="callback.php"><p class="callback__title popup__title">Оставьте контактные данные и мы свяжемся с вами по поводу заказа!</p><p><label class="visually-hidden" for="top-name">Введите Ваше имя</label><input class="form-input" type="text" name="name" id="top-name" placeholder="Введите Ваше имя" required></p><p><label class="visually-hidden" for="top-phone">Введите Ваш номер телефона</label><input class="form-input" type="tel" name="phone" placeholder="Введите Ваш номер телефона" id="top-phone"></p><input type="hidden" name="item" value="'+$(this).parent().find(".item__name").text()+' '+$(this).parent().find(".item__details--v").text()+'"><p><input class="form-button popup-submit" type="submit" value="Оформить заказ"></p></form>';
  $.fancybox.open({
    src : string,
    type : 'html',
    smallBtn : true
  });
  $("input[type=tel]").mask("+7 (999) 999-99-99");
});

$("input[type=tel]").mask("+7 (999) 999-99-99");
