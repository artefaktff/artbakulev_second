let info = $('#info'),
    intro_bottom = $('#introduction').height(),
    information = $('#information'),
    margin = 400,
    timer;

function checkInfoVisibility() {
    if (window.pageYOffset < intro_bottom) {
        if (information.css('display') === 'block') {
            toggleInfo();

        }
        info.fadeOut(100);

    } else {
        info.fadeIn(100);


    }
}

function toggleInfo() { // # TODO: понять как это должно работать
    if (information.css('display') === 'none') {
        info.children('.fa-bars')[0].className = 'fa fa-times';

        information.css('display', 'block');
        information.animate({
            marginLeft: '0px',
        }, 100);
        // information.css('marginLeft', '0px');
        // information.css('marginLeft', (-margin + 'px'));


        // information.css('marginLeft', -margin + 'px');
    }

    else {
        info.children('.fa-times')[0].className = 'fa fa-bars';
        information.animate({
            marginLeft: '-400px',
        }, 100);
        setTimeout(function () {
            information.css('display', 'none');
        }, 1000)

        // information.css('marginLeft', '-400px');
    }
}

$(document).bind('scroll', checkInfoVisibility);
info.bind('click', toggleInfo);

// $(document).ready(function () {
//
//
//     // function visibility(bool) {
//     //     if (!bool) {
//     //         information.style.display = 'block';
//     //         info.style.opacity = 1;
//     //         info.style.cursor = 'pointer';
//     //     }
//     //     else {
//     //         information.style.display = 'none';
//     //         info.style.opacity = 0;
//     //         info.style.cursor = 'default';
//     //     }
//     //
//     // }
//
//     function toggle(bool) {
//         if (!bool) {
//             // info.style.marginLeft = 0;
//             information.style.marginLeft = -margin + 'px';
//         }
//         else {
//             // info.style.marginLeft = -margin + 'px';
//             information.style.marginLeft = 0;
//         }
//     }
//
//     function makeMargin(bool) {
//         if (bool) {
//             // info.style.marginLeft = 0;
//             information.style.marginLeft = -margin + 'px';
//         } else {
//             // info.style.marginLeft = margin + 'px';
//             information.style.marginLeft = 0 + 'px';
//         }
//     }
//
//     visibility(window.pageYOffset < intro_bottom);
//     $(document).on('scroll', function () {
//         visibility((window.pageYOffset) < intro_bottom);
//         if ((window.pageYOffset) < intro_bottom) {
//             toggle(info.style.marginLeft === margin + 'px');
//
//         }
//     });
//     $('#info').on('click', function () {
//         makeMargin(info.style.marginLeft === margin + 'px');
//     });
//
// });