$(document).ready(function () {
    let descriptions = document.getElementsByClassName('description'),
        max_length = 150,
        tempText;

    for (let i = 0; i < descriptions.length; i++) {
        // symIndex = descriptions[i].textContent.indexOf('|enough');
        // if (symIndex > max_length){
        // alert(descriptions[i].innerHTML.substr(0, max_length));

        tempText = descriptions[i].innerHTML.replace(/(&lt.+?&gt;)|(\r|\n)/g, '');
        // alert(tempText);
        if (tempText.length < max_length){
            descriptions[i].innerText = tempText + '...';
        } else {
            descriptions[i].innerText = tempText.substr(0, max_length) + '...';
        }
        // alert(descriptions[i].innerHTML.substr(0, max_length));

        // }
        // else {
        //     descriptions[i].innerHTML = descriptions[i].innerHTML.substr(0, symIndex) + '...';
        // }
    }
});
