// Меню
(() => {
    
    const body = document.querySelector('body');
    const menuButton = document.querySelector('.menu__button');
    const menuButtonIcon = menuButton.querySelector('.menu__icon');
    const menuList = document.querySelector('.menu__list');
    const menuCurrent = document.querySelector('.menu__current');
    let currentLinkTextBack = menuCurrent.textContent;
    

    (function showMenu() {
        
        menuButton.addEventListener('click', () => {
    
            if (menuButton.classList.contains('menu__button--opened')) {
                closeMenu();
            } else {
                openMenu();
            }
            
            if (menuCurrent.textContent === ``) {
                menuCurrent.textContent = currentLinkTextBack;
            } else {
                menuCurrent.textContent = ``;
            }
        });

        function openMenu() {
            menuButton.classList.add('menu__button--opened');
            menuList.classList.add('menu__list--opened');
            menuButtonIcon.classList.add('menu__icon--opened');
            // body.classList.add('page-body--lock');
            window.addEventListener('keydown', onEscCloseMenu);
        }
    
        function closeMenu() {
            menuButton.classList.remove('menu__button--opened');
            menuList.classList.remove('menu__list--opened');
            menuButtonIcon.classList.remove('menu__icon--opened');
            // body.classList.remove('page-body--lock');
            window.removeEventListener('keydown', onEscCloseMenu);
        }
    
        function onEscCloseMenu(evt) {
            if (evt.keyCode === 27) {
                closeMenu();
            }
        }

    })();


    (function stickMenu() {
        const headerLogoContainer = document.querySelector('.header__logo-wrapper');
        const menu = document.querySelector('.menu');
        const tabletWidth = 768;
    
        let stickyHeight = headerLogoContainer.clientHeight + menu.clientHeight;
    
        window.addEventListener('scroll', () => {
            if (window.scrollY > stickyHeight && window.innerWidth < tabletWidth) {
                menu.classList.add('menu--sticky');
            } else {
                menu.classList.remove('menu--sticky');
            }
        });
    })();


})();