$(document).ready(function () {
    $(document).on('mousemove', function (e) {
        var left = 0, top = 0,
            main = $('#parallax');
        var offset =  { left: main.offset().left, top: main.offset().top };
        left = (e.pageX - offset.left);
        top = (e.pageY - offset.top);
        main.css({
        backgroundPosition   : '-' + (0.03 * top) + 'px -' + (0.03 *left ) + 'px'
    })
        ;
    });
    $('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        var line = document.getElementById('red_line_1'),
            intro_coordinates = document.getElementById('introduction').getBoundingClientRect(),
            height = intro_coordinates.bottom - line.getBoundingClientRect().top;
        $('#rocket').animate({
                'margin-top': height - 32 + 'px'
            }, 1000, function () {
                document.getElementById('rocket').style.marginTop = '30px'
            }
        );
        $("#red_line_1").animate({
            height: height - 36 + 'px'
        }, 1000, function () {
            document.getElementById('red_line_1').style.height = '0';
        });
        $("#red_line_2").animate({
            height: height - 36 + 'px'
        }, 1000, function () {
            document.getElementById('red_line_2').style.height = '0';
        });
        $('html,body').animate(
            {scrollTop: $(d).offset().top}, t);
    });
});