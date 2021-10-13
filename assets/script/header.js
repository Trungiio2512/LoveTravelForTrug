const modalHeaderMenu = document.querySelector('.js-header-menu');
const modalHeaderOption = document.querySelector('.js-header-option');
const modalClose = document.querySelector('.js-header-option-close');



modalHeaderMenu.addEventListener('click', () => {
    modalHeaderOption.classList.add('open');
    // modalHeaderOption.classList.add('header-option--animation-show');
})

modalClose.addEventListener('click',() => {
    // modalHeaderOption.classList.add('header-option--animation-hide');
    // modalHeaderOption.classList.remove('header-option--animation-show');
    modalHeaderOption.classList.remove('open');
})