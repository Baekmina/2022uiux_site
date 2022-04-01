var slide = $(".slide_one").bxSlider();

$(".prevBtn").click(function () {
    slide.goToPrevSlide();
});
$(".nextBtn").click(function () {
    slide.goToNextSlide();
});
