let menu = $('#choice_menu');

function choiceOfDate() {
    let months = [],
        months_names = ['June', 'July', 'August'],
        months_days_number = [30, 31, 31],
        months_days_offset = [5, 0, 3],
        months_days_back_offset = [0, 4, 1],
        table, table_code, countDays, countWeeks;
    for (let i = 0; i < months_names.length; i++) {
        months.push(document.getElementById(months_names[i]));
    }

    for (let i = 0; i < 3; i++) {
        table = document.createElement('div');
        table.className = 'month_table';


        table.setAttribute('cellspacing', '5');


        countDays = 7;
        countWeeks = 0;
        table_code = '';
        for (let day = 0; day < months_days_number[i] + months_days_offset[i] + months_days_back_offset[i]; day++) {
            if (countDays === 7) {
                if (!countWeeks) {
                    table_code += '</div>';
                    table_code += '<div class="week days_of_week"><div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div></div>'
                }
                table_code += '</div><input class="week hvr-push clickable" value="1" name="' + months_names[i] + '-week-' + countWeeks + '" id="' + months_names[i] + '-week-' + countWeeks + '">';
                countDays = 0;
                countWeeks += 1;
            }
            if (day < months_days_offset[i]) {
                table_code += '<div>X</div>'
            } else if (day > months_days_number[i] + months_days_offset[i] - 1) {
                table_code += '<div>X</div>'
            } else {
                table_code += '<div>' + (day - months_days_offset[i] + 1) + '</div>'
            }
            countDays += 1;
        }
        table_code += '</div>';
        table.innerHTML = table_code;
        months[i].append(table);
    }
    onWeekClick();

}


function onWeekClick() {
    let weeks = document.getElementsByClassName('week');
    for (let i = 0; i < weeks.length; i++) {
        weeks[i].isClicked = false;
        weeks[i].addEventListener('click', function () {
            if (this.isClicked) {
                this.isClicked = false;
                this.className = 'week hvr_push clickable';
                this.style.backgroundColor = 'transparent';
            } else {
                this.isClicked = true;
                this.style.backgroundColor = '#8bc2a1';
                this.className = 'week';


            }
        })
    }
}