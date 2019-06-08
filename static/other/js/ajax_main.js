$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        function getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                let cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    let cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
            // Only send the token to relative URLs i.e. locally.
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
    }
});

$('#vote').on('click', function (e) {
    let name = $('#name'),
        duration = $('#duration'),
        clicked_weeks = $('.clicked'),
        clicked_weeks_id = '',
        json = {'name': name.val(), 'duration': duration.val()};
    if (clicked_weeks.length === 0) {
        alert("Ни одной прям недели не можешь? Выбери одну хотя бы.");
        return;
    }

    if (name.val() === '') {
        alert("Вот не надо нам анонимов. Введи имя.");
        return;
    }

    if (duration.val() === '') {
        alert("Не, а на сколько мы пойдем, кто указывать будет? Никита Мелков?");
        return;
    }
    for (let i = 0; i < clicked_weeks.length; ++i) {
        clicked_weeks_id += clicked_weeks[i].id + ', ';
    }
    json.weeks = clicked_weeks_id;
    $.ajax({
            url: 'ajax/',
            type: 'POST',
            data: json,
            success: function (response) {
                window.location.href = "voted/";
            }
        }
    );
});