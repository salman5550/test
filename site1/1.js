const btn = document.querySelector('.btn');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
btn.addEventListener('click', function(event) {

    modal.classList.add('showed')

});
close.addEventListener('click', function(event) {

    modal.classList.remove('showed')

});