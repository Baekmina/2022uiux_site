const swiper = new Swiper('.swiper', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(".insta .filter div").hover(function(){
    console.log($(this).index())
    $(this).find(".insta_img").removeClass("reyes")
},function(){
    $(".insta_img").addClass("reyes")
})