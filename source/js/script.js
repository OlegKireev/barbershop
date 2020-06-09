// Меню

const menu = document.querySelector('.menu');
const menuItems = menu.querySelectorAll('li');
const menuButton = menu.querySelector('.menu__button');
const menuIcon = menu.querySelector('.menu__icon');

menuButton.addEventListener('click', () => {
    menuItems.forEach((item,i)=> {
        menu.classList.toggle('menu--opened');
        menuButton.classList.toggle('menu__button--opened');
        menuIcon.classList.toggle('menu__icon--opened');

        if (i > 0) {
            item.classList.toggle('display-none');
        } else {
            item.querySelector('a').classList.toggle('menu__link--active');
        }
    })
})

// Закрываем меню при загрузке
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        menuButton.click();
    }, 0);
});