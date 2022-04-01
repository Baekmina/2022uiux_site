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


$("#playBtn").click(function(){
    $(".vfixed").show();
    $("#30s").get(0).play();
});
$(".closeX").click(function(){
    $(".vfixed").hide();
    $("#30s").get(0).pause();
});


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
    loop:true,
    center:true,
    autoplay:true,
    margin:30,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:4},
    }
});


// laze-load
const lazyLoad = document.querySelectorAll(".lazy-load"); // 모든 이미지 파일 선택
window.addEventListener("scroll", (event) => {
    lazyLoad.forEach((view) => { // 각 이미지마다
        console.log("Scrolling...");
        const rect = view.getBoundingClientRect().top; // getBoundingClientRect = pageYOffset(해당 높이)와 똑같음.
        if (rect <= window.innerHeight) { // 이미지가 보일 타이밍을 계산
            view.classList.add("fade"); // 트랜지션 추가
        }
    });
});