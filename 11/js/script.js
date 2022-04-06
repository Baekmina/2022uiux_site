// fullpage
$("#fullpage").fullpage({
    menu:".topMenu",
    anchors:["p_one","p_two","p_three","p_four","p_five"],
    responsiveWidth:1000,
})

// modal
$(".youtube").colorbox({
    iframe:true,
    innerWidth:1000,
    innerHeight:562.5,
});

// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });