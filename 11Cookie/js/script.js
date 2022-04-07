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
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: { delay: 2000, },


  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

  // swiper tabmenu
$("#tabmenu li").click(function () {
  let i = $(this).index();
  $(".swiper-slide img").hide();
  $(".swiper-slide img").eq(i).show();
})