// Меню
(() => {
    
    const menuButton = document.querySelector('.menu__button');
    const menuButtonIcon = menuButton.querySelector('.menu__icon');
    const menuList = document.querySelector('.menu__list');
    const menuCurrent = document.querySelector('.menu__current');
    let currentLinkTextBack = menuCurrent.textContent;
    
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('menu__button--opened');
        menuList.classList.toggle('menu__list--opened');
        menuButtonIcon.classList.toggle('menu__icon--opened');
    
        if (menuCurrent.textContent === ``) {
            menuCurrent.textContent = currentLinkTextBack;
        } else {
            menuCurrent.textContent = ``;
        }
    })

})();