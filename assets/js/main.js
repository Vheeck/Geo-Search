let $ = params => document.querySelector(params);
let _ = params => document.querySelectorAll(params);

$('#show-stat').addEventListener('click', () => {
    if ($('#stat').classList == 'active') {
        $('#stat').classList.remove('active');
        $('#show-stat > img').src = 'assets/svg/chevron-up-solid.svg';
        $('#show-stat > img').alt = 'up';
    }
    else {
        $('#stat').classList.add('active');
        $('#show-stat > img').src = 'assets/svg/chevron-down-solid.svg';
        $('#show-stat > img').alt = 'down';
    }
});