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


// Слайдер с преимуществами
// СДЕЛАТЬ ПЛАВНУЮ АНИМАЦИЮ СМЕНЫ СЛАЙДОВ
(()=>{

    const advantages = document.querySelector('.advantages');
    const slides = advantages.querySelectorAll('.advantage');
    const sliderButtons = advantages.querySelectorAll('.advantages__dot');
    
    sliderButtons.forEach((button, i)=> {
        button.addEventListener('click', (evt) => {
    
            // Скрываем все карточки
            slides.forEach((slide, i) => {
                slide.classList.remove('advantage--active');
            })
    
            // Показываем нужную карточку
            slides[i].classList.add('advantage--active');
            
            sliderButtons.forEach((btn, i) => {
                // Удаляем активный класс всех кнопок
                btn.classList.remove('advantages__dot--active');
            });
    
            // Добавляем активный класс нажатой кнопке
            evt.target.classList.add('advantages__dot--active');
    
        });
    });
    
    // Автолистание слайдера
    // СДЕЛАТЬ СБРОС СЧЕТЧИКА ПРИ КЛИКЕ И ПОЛОСУ ПРОГРЕССА
    document.addEventListener('DOMContentLoaded', () => {
        let i = 0;
    
        setInterval(() => {
            if (i >= slides.length - 1) {
                i = 0;
            } else {
                i++;
            }
            sliderButtons[i].click();
        }, 10000);
        
    });

})();

(()=>{

    // Слайдер с коментариями
    const container = document.querySelector('.reviews');
    const reviews = container.querySelectorAll('.review');
    const reviewsButtons = container.querySelectorAll('.reviews__dot');
    const previousButton = container.querySelector('.reviews__button--previous');
    const nextButton = container.querySelector('.reviews__button--next');
    // Переменная активной карточки коментария
    let activeTabIndex = 0;
    
    // Вешаем обрабочики на все дот-кнопки
    reviewsButtons.forEach((button, i)=> {
        button.addEventListener('click', (evt) => {
    
            // Прячем все карточки коментариев
            reviews.forEach((slide) => {
                slide.classList.remove('review--active');
            })
    
            // Показываем нужную
            reviews[i].classList.add('review--active');
            // Устанавливаем переменную равную той дот-кнопке
            // для синхронизации с кнопками "влево", "вправо"
            activeTabIndex = i;
    
            // Удаляем активный класс у всех дот-кнопок
            reviewsButtons.forEach((btn) => {
                btn.classList.remove('reviews__dot--active');
            });
    
            // Добавляем активный класс у кликнутой кнопки
            evt.target.classList.add('reviews__dot--active');
    
        });
    });
    
    // Добавляем обработчик на кнопку "влево"
    nextButton.addEventListener('click', () => {
        
        // Если кнопка не последняя
        if (activeTabIndex < reviewsButtons.length - 1) {
            activeTabIndex++;
        // Если кнопка последняя
        } else {
            activeTabIndex = 0;
        }
        // Кликаем по нужной кнопке
        reviewsButtons[activeTabIndex].click();
    
    });
    
    previousButton.addEventListener('click', () => {
    
        // Если кнопка первая
        if (activeTabIndex === 0) {
            activeTabIndex = reviewsButtons.length - 1;
        // Если кнопка не первая 
        } else {
            activeTabIndex--;
        }
        // Кликаем по нужной кнопке
        reviewsButtons[activeTabIndex].click();
    
    });

})();



// Прячем все отзывы кроме первого
// document.addEventListener('DOMContentLoaded', () => {
//     reviews.forEach((item, i) => {
//         if(i > 0) {
//             item.classList.add('display-none');
//         }
//     })
// });