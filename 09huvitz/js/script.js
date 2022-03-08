// submenu
$(".gnb>ul").hover(function(){
    $(this).find(".submenu").show();
},function(){
    $(this).find(".submenu").hide();
})



let chk = true;

$(".toggle").click(function(){
    if(chk == true){
        $(this).addClass("active");
        $(".gnb").css("left",0);
        chk = false;
    }else{
        $(this).removeClass("active")
        $(".gnb").css("left","-150%")
        chk = true;
    }
});

var myslide = $(".slide").bxSlider({
    auto:true,
});

$(".prevBtn").click(function(){
    myslide.goToPrevSlide();
});
$(".nextBtn").click(function(){
    myslide.goToNextSlide();
});