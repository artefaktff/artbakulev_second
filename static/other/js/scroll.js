$(document).ready(function () {
    $(".anchor[href*=#]").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 75
        }, 777);
        e.preventDefault();
        return false;
    });
});