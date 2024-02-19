const menuBtn = document.querySelector('.header__btn');
const navMenu = document.querySelector('.header__nav');

const toggler = (elem, selector) => {
    !elem.classList.contains(selector) ?
        elem.classList.add(selector) :
        elem.classList.remove(selector);
}

toggler(navMenu, 'hidden');

menuBtn.addEventListener('click', function (evt) {
    toggler(navMenu, 'hidden');
    Array.from(menuBtn.children).forEach(i => toggler(i, 'hidden'));
})