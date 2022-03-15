// wow
new WOW(). init();


// lang
$(".lang div").click(function(){
    let i = $(this).index();
    $(".lang div").removeClass("active");
    $(this).addClass("active");

    if(i == 1){
        $(".gnb ul").html(`
                    <li><a href="#">COMPANY</a></li>
                    <li><a href="#">BUSINESS</a></li>
                    <li><a href="#">PRODUCT</a></li>
                    <li><a href="#">SCIENCE</a></li>
                    <li><a href="#">PR</a></li>
                    <li><a href="#">INFORMATION</a></li>
        `)
    }else{
        $(".gnb ul").html(`
                    <li><a href="#">기업정보</a></li>
                    <li><a href="#">사업소개</a></li>
                    <li><a href="#">핵심경쟁력</a></li>
                    <li><a href="#">투자정보</a></li>
                    <li><a href="#">홍보센터</a></li>
                    <li><a href="#">제품정보</a></li>
        `)
    }
});

$(window).scroll(function(){
    let scrollY = window.pageYOffset;
    console.log(scrollY);

    if(scrollY > 200){
        $("#header").addClass("fixed");
    }else{
        $("#header").removeClass("fixed");
    }
});


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

var slide = $(".slider").bxSlider({
    pager:false,
});

$(".left").click(function(){
    slide.goToPrevSlide();
});
$(".right").click(function(){
    slide.goToNextSlide();
});

var cSlide = $(".conSlide").bxSlider({
    pager:false,
    mode:"vertical",
});
$(".cprev").click(function(){
    cSlide.goToPrevSlide();
});
$(".cnext").click(function(){
    cSlide.goToNextSlide();
});


// contents 

$(".modal a").colorbox({
    rel:"modal"
});
$(".youtube").colorbox({
    iframe:true,
    innerWidth:1000,
    innerHeight:562.5,
});