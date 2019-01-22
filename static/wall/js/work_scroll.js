$(document).ready(function () {

    var header = document.getElementById('header');
    var top, constant_of_opacity;
    if (document.documentElement.clientWidth < 600) {
        constant_of_opacity = 0.7;
        var back = document.getElementById('back');
        back.style.display = 'none';
        top = document.getElementById('forMobileToTop');
        $('#forMobileToTop').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate(
                    {scrollTop: 0}, 500);
            }
        )
    }
    else {
        constant_of_opacity = 1;
        top = document.getElementById('toTop');
        $('#toTop').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate(
                    {scrollTop: 0}, 500);
            }
        )
    }
    if (window.pageYOffset > 250) {
        header.style.opacity = 0.1;
        top.style.opacity = constant_of_opacity;
    }

    $(document).on('scroll', function () {

        if (window.pageYOffset > 300) {
            header.style.opacity = 0.1;
            top.style.opacity = constant_of_opacity;
        }
        else {
            header.style.opacity = 1;
            top.style.opacity = 0;
        }
    });


});