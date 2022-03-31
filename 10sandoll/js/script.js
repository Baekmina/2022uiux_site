// visual modal
// $(function(){
//     $("#alertDelAuthorityModal").modal("show");
// });

// var alertSize = 0;
// var opt = null;

// var alertCookie = document.cookie;
// if(alertCookie .indexOf("alert_display=none")>0){
//     $("#alertModal").hide();
// }


// var videoModal = document.getElementById("videiModal");
// videoModal.addEventListener("show.bs.modal", function(event){
//     $("#30s_video").get(0).play();
// });
// videoModal.addEventListener("hide.bs.modal", function(event){
//     $("#30s_video").get(0).pause();
// })

// var platBtn = new bootstrap.Modal(document.getElementById("playBtn"),{
//     keyboard:false
// })



// $("#playBtn").colorbox({
//     iframe:true,
//     innerWidth:"100%",
//     innerHeight:auto,
// });


//owlSlider1
// $("#carouselSlide1").owlCarousel({
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