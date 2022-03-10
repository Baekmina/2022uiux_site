// lang
$(".lang div").click(function(){
    $(".lang div").removeClass("active");
    $(this).addClass("active");
})


// submenu
$(".gnb>ul").hover(function(){
    $(this).find(".submenu").show();
},function(){
    $(this).find(".submenu").hide();
})


// toggle

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



// bxslider

var myslide = $(".slide").bxSlider({
    auto:true,
});

$(".prevBtn").click(function(){
    myslide.goToPrevSlide();
});
$(".nextBtn").click(function(){
    myslide.goToNextSlide();
});