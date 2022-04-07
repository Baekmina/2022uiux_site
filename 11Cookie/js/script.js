// fullpage
$("#fullpage").fullpage({
  menu: ".topMenu",
  anchors: ["p_one", "p_two", "p_three", "p_four", "p_five"],
  responsiveWidth: 1000,
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

// $(".tab_wrap ul li").click(function(){

//   let i = $(".tab_con .tab_list").index();

//   $("tab_con .tab_list").hide();
//   $(this).eq(i).show();
// })

$(".face li").click(function(){
  $(".face li").removeClass("active")
  $(this).addClass("active")
})


var swiper2_1_menu = new Swiper(".swiper2_1_menu",{
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

