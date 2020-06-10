// Меню

const menu = document.querySelector('.menu');
const menuItems = menu.querySelectorAll('li');
const menuButton = menu.querySelector('.menu__button');
const menuIcon = menu.querySelector('.menu__icon');

menuButton.addEventListener('click', () => {
    menuItems.forEach((item,i)=> {
        menu.classList.toggle('menu--closed');
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


// Слайдер с преимуществами
// СДЕЛАТЬ ПЛАВНУЮ АНИМАЦИЮ СМЕНЫ СЛАЙДОВ
const advantages = document.querySelector('.advantages');
const slides = advantages.querySelectorAll('.advantage');
const sliderButtons = advantages.querySelectorAll('.advantages__dot');

sliderButtons.forEach((button, i)=> {
    button.addEventListener('click', (evt) => {

        // Скрываем все карточки
        slides.forEach((slide, i) => {
            slide.classList.remove('advantage--active');
            slide.classList.add('display-none');
        })

        // Показываем нужную карточку
        slides[i].classList.remove('display-none');
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


// Слайдер с коментариями
const container = document.querySelector('.reviews');
const reviews = container.querySelectorAll('.review');
const reviewsButtons = container.querySelectorAll('.reviews__dot');

reviewsButtons.forEach((button, i)=> {
    button.addEventListener('click', (evt) => {

        reviews.forEach((slide, i) => {
            slide.classList.remove('review--active');
            slide.classList.add('display-none');
        })

        reviews[i].classList.remove('display-none');
        reviews[i].classList.add('review--active');

        reviewsButtons.forEach((btn, i) => {
            btn.classList.remove('reviews__dot--active');
        });

        evt.target.classList.add('reviews__dot--active');

    });
});

// Прячем все отзывы кроме первого
document.addEventListener('DOMContentLoaded', () => {
    reviews.forEach((item, i) => {
        if(i > 0) {
            item.classList.add('display-none');
        }
    })
});