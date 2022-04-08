// wow
new WOW().init();

// fullpage
$("#fullpage").fullpage({
  menu: ".topMenu",
  anchors: ["p_one", "p_two", "p_three", "p_four", "p_five"],
  responsiveWidth: 1000,

  // page4
  afterLoad: function(anchorslink, index){
    if(index == 4){
      $(".cImg").addClass("move")
      $(".ani").addClass("top")
    }else{
      $(".cImg").removeClass("move")
      $(".ani").removeClass("top")
    }
  }
})


// modal
$(".youtube").colorbox({
  iframe: true,
  innerWidth: 1000,
  innerHeight: 562.5,
});

// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper1 = new Swiper('.mainSwiper', {
  loop: true,
  spaceBetween: 10,
  autoplay: { delay: 2000, },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  thumbs: {
    swiper: swiper,
  },
});


// page3 swiper

$(".tab_wrap ul li").click(function(e){
  e.preventDefault();

  let i = $(this).index();
  console.log($(this).index())

  $(".tab_con .tab_list").hide();
  $(".tab_con .tab_list").eq(i).show();
})

$(".face li").click(function(e){
  e.preventDefault();
  let num = $(this).index();
  console.log(num);

  $(".face li").removeClass("active");
  $(this).addClass("active");
})

// swiper 2-1
var swiper2_1_menu = new Swiper(".swiper2_1_menu",{
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
})

var swiper2_1_slide = new Swiper(".swiper2_1_slide",{
  loop:true,
  slidesPerView: "auto",

  thumbs: {
    swiper: swiper2_1_menu,
  },
})

// swiper 2-2
var swiper2_2_menu = new Swiper(".swiper2_2_menu",{
  freeMode: true,
  watchSlidesProgress: true,
})

var swiper2_2_slide = new Swiper(".swiper2_2_slide",{
  loop:true,
  slidesPerView: "auto",

  thumbs: {
    swiper: swiper2_2_menu,
  },
})

// swiper 2-3
var swiper2_3_menu = new Swiper(".swiper2_3_menu",{
  freeMode: true,
  watchSlidesProgress: true,
})

var swiper2_3_slide = new Swiper(".swiper2_3_slide",{
  loop:true,
  slidesPerView: "auto",

  thumbs: {
    swiper: swiper2_3_menu,
  },
})

// swiper 2-4
var swiper2_4_menu = new Swiper(".swiper2_4_menu",{
  freeMode: true,
  watchSlidesProgress: true,
})

var swiper2_4_slide = new Swiper(".swiper2_4_slide",{
  loop:true,
  slidesPerView: "auto",

  thumbs: {
    swiper: swiper2_4_menu,
  },
})


