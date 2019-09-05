/* [be]Lazy.js - v1.8.2 - 2016.10.25 */
(function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});

$(document).ready(function(){

  var bLazy = new Blazy({
    selector : 'img',
    offset: 300,
  });

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
    lazyLoad: 'ondemand',
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
    lazyLoad: 'ondemand',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
    lazyLoad: 'progressive',
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
});
