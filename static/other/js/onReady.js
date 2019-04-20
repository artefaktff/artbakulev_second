$(document).ready(function () {
    let jumbotron_text_block = $('#jumbotron-text-block'),
        h1 = jumbotron_text_block.find(".title")[0],
        max_width = getComputedStyle(h1).width;
    jumbotron_text_block.css('max-width', max_width);

    $(document).on('scroll', function (e) {
        let navbar = $('#navbar'),
            jumbotron_footer = $('#jumbotron-footer'),
            height_jumbotron = $('#jumbotron').innerHeight(),
            height_jumbotron_footer_plus_size = jumbotron_footer.offset().top - jumbotron_footer.height();
        if (height_jumbotron < window.pageYOffset && window.pageYOffset < height_jumbotron_footer_plus_size) {
            navbar.fadeIn();
        } else {
            navbar.fadeOut();
        }
    });
});

