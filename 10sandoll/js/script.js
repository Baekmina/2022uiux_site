// visual modal
// $(".visual .playBtn").colorbox({
//     iframe:true,
// });


// owlSlider1
// $(".owlSlider1").owlCarousel({
//     loop:true,
//     autoplay:true,
// });



// portfolio

const btnElem = $(".portfolio .btn-group button")

btnElem.click(function(){
    let i = $(this).index();

    btnElem.removeClass("active");
    $(this).addClass("active");

    let selector = $(this).attr("data-filter");
    console.log(selector);
    $(".portfolio .view").isotope({
        filter:selector
    });
});

window.onload = function(){
    $("#btnAll").trigger("click");
}


//owlslider
$("#owlSlider").owlCarousel({
    loop:false,
    center:true,
    autoplay:true,
    margin:30,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:4},
    }
});