// Для работы попапа необходимо:
// - Указать для элемента-ссылки/кнопки при клике на которые открываются модальные окна класс '.popup-link'
//              <a class="popup-link">Открыть модальное окно</a>
// - В этих же ссылках указать в атрибуте href ID секции-блока модального окна (href="#login")
//              <a class="popup-link" href="#login">Открыть модальное окно</a>
// - В секциях-блоках модальных окон указать ID аналогичный ссылке на это модальное окно
//              <section id="#login">.......</section>
// - В секции-блоки модальных окон поместить элемент (кнопку/ссылку) при нажатии на которую произойдет
// закрытие модального окна и добавить ей класс ('popup-close');
//              <section id="#login"><button class="popup-close" type="button">Закрыть</button><section>


(() => {
    'use strict';

    const popupLinks = document.querySelectorAll('.popup-link');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lock-padding');
    
    const ESC_BTN = 27;
    let unlock = true;
    
    // Значение должно соответсвовать продолжительности анимации попапа
    const timeout = 800;
    
    if (popupLinks.length > 0) {
        popupLinks.forEach((link) => {
            link.addEventListener('click', (evt) => {
                evt.preventDefault();
                const popupName = link.getAttribute('href');
                const currentPopup = document.querySelector(popupName);
                popupOpen(currentPopup);
            });
        })
    }
    
    const popupCloseBtn = document.querySelectorAll('.popup-close');
    if (popupCloseBtn.length > 0) {
        popupCloseBtn.forEach((button) => {
            button.addEventListener('click', (evt) => {
                evt.preventDefault();
                popupClose(button.closest('.popup'));
            })
        });
    }
    
    function popupOpen(currentPopup) {
        if (currentPopup && unlock) {
            const popupActive = document.querySelector('.popup--opened');
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            showPopup(currentPopup);
            currentPopup.addEventListener('click', (evt) => {
                if (!evt.target.closest('.popup__content')) {
                    popupClose(evt.target.closest('.popup'));
                }
            });
        }
    }
    
    function popupClose(popupActive, doUnlock = true) {
        if(unlock) {
            hidePopup(popupActive);
            
            if (doUnlock) {
                bodyUnlock();
            }
        }
    }
    
    function onEscCloseModal(evt) {
        if (evt.keyCode === 27) {
            const popupActive = document.querySelector('.popup--opened');
            popupClose(popupActive);
        }
    }
    
    function showPopup(currentPopup) {
        // currentPopup.classList.remove('visually-hidden');
        currentPopup.classList.add('popup--opened');
        document.addEventListener(`keydown`, onEscCloseModal);
    }
    
    function hidePopup(popupActive) {
        popupActive.classList.remove('popup--opened');
        // popupActive.classList.add('visually-hidden');
        document.removeEventListener(`keydown`, onEscCloseModal);
    }
    
    
    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    
        if (lockPadding.length > 0) {
            lockPadding.forEach((item) => {
                item.getElementsByClassName.paddingRight = lockPaddingValue;
            })
        }
    
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('page-body--lock');
    
        lockScroll();    
    }
    
    function bodyUnlock() {
        setTimeout(() => {
            if (lockPadding > 0) {
                lockPadding.forEach((item) => {
                    item.style.paddingRight = '0px';
                })
            }
    
            body.style.paddingRight = '0px';
            body.classList.remove('page-body--lock');
        }, timeout)
    }
    
    function lockScroll () {
        unlock = false;
        setTimeout(() => {
            unlock = true;
        }, timeout);
    }
})();




