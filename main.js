let more = document.querySelector('.open-window');
let modal = document.querySelector('.window');
let end = document.querySelector('.close');

more.onclick = function () {
    modal.style.display = 'block';
}
end.onclick = function () {
    modal.style.display = 'none';
}