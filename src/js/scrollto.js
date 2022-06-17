$(document).ready(function () {
    $(".scroll").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-70 + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });
});