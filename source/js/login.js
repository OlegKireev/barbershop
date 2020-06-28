// // Логин
// (() => {
//     const loginButton = document.querySelector(`.menu__link--login`);
//     const loginModal = document.querySelector(`.login`);
//     const modalCloseButton = loginModal.querySelector(`.popup__button--close`);
//     const pageBody = document.querySelector(`body`);
//     const ESC__BUTTON = 27;
    
//     const showLoginModal = function () {
//         loginModal.classList.remove(`visually-hidden`);
//         pageBody.classList.add(`overflow-hidden`);
//     };

//     const hideLoginModal = function () {
//         loginModal.classList.add(`visually-hidden`);
//         pageBody.classList.remove(`overflow-hidden`);
//         document.removeEventListener(`keydown`, onEscCloseModal);
//     };

//     const onEscCloseModal = function (evt) {
//         if (evt.keyCode === ESC__BUTTON) {
//             hideLoginModal();
//         }
//     }

//     loginButton.addEventListener(`click`, () => {
//         showLoginModal();
//         document.addEventListener(`keydown`, onEscCloseModal);
//     })

//     modalCloseButton.addEventListener(`click`, () => {
//         hideLoginModal();
//     })
// })();