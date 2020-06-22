// Загрузка json-файлов
(() => {

    window.backend = {
        // Метод загрузки данных с сервера
        load: function (url, onSuccess, onError) {
          let xhr = new XMLHttpRequest();
          xhr.responseType = 'json';
          xhr.timeout = 10000;
          // Открываем запрос
          xhr.open('GET', url);
    
          // Добавляем обработчик загрузки данных
          xhr.addEventListener('load', function () {
            // Действия при успехе
            if (xhr.status === 200) {
              // Передаем в функцию-колбек полученные данные
              onSuccess(xhr.response);
            // Действия при ошибке
            } else {
              onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
            }
          });
    
          // Добавляем на объект запроса обработчик события ошибки ожидания
          xhr.addEventListener('timeout', function () {
            onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
          });
          // Отправляем запрос на сервер
          xhr.send();
        }
    }

})();

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

// Новости
(() => {
    const newsList = document.querySelector(`.news__list`);
    let newsItem = newsList.querySelectorAll(`.news__item`);


    // Создание элементов новостей из json файла согласно template
    // Объявляем шаблон для миниатюры
    let newsTemplate = document.querySelector('#news__template').content;

    // Действия при успешной загрузке данных с сервера
    let onSuccess = function (newsData) {

        // Создаем на основе массива 'newsData' полученного из json-файла новости по template
        newsData.forEach((newsItem, i) => {

            // Клонируем шаблон в новый элемент и записиваем в переменную
            let newNewsElement = newsTemplate.cloneNode(true);

            // Устанавливаем день
            let newsDateDay = newNewsElement.querySelector('.news__day');
            newsDateDay.textContent = newsData[i].dateDay;

            // Устанавливаем месяц
            let newsDateMonth = newNewsElement.querySelector('.news__month');
            newsDateMonth.textContent = newsData[i].dateMonth;
            
            // Устанавливаем текст новости
            let newsText = newNewsElement.querySelector('.news__text');
            newsText.textContent = newsData[i].text;
            
            // Помещаем в контейтер созданный элемент новости
            newsList.append(newNewsElement);

            //   // Обрабочик клика по миниатюре.
            //   let onSmallPhotoCLick = function (index) {
            //     return function curriedFunction(evt) {
            //       evt.preventDefault();
            //       // Показываем большое изображение с коментариями
            //       openBigPhoto(index);
            //       // Добавляем обработчик нажатия Esc
            //       document.addEventListener('keydown', onBigPhotoEscKeydown);
            //     };
            //   };

            //   // Записываем в псевдомассив все миниатюры
            //   let pictureElement = document.querySelectorAll('.picture__link');
            //   // Задаем миниатюре с текущим индексом обработчик клика и передаем внутрь функции текущий индекс цикла параметром (иначе, из-за замыкания передается всегда 6);
            //   pictureElement[i].addEventListener('click', onSmallPhotoCLick(i), false);

        });
    };

    // Действия при ошибке загрузки данных с сервера
    let onError = function (errorMessage) {
        let node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; padding: 10px 0; text-align: center; background-color: tomato;';
        node.style.position = 'abolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '30px';

        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node);
    };

    // Адрес json-файла с данными
    let dataUrl = 'server/news.json';

    // Загружаем данные
    window.backend.load(dataUrl, onSuccess, onError);

    
    // Обработчик изменения размера окна
    // Меняем значение на 3 на дескоптной версии для показа 3ех новостей
    window.addEventListener('resize', (evt) => {
        if (evt.target.innerWidth >= DESKTOP_WIDTH) {
            showNewsAmount = 3;
        } else {
            showNewsAmount = 2;
        }
        console.log(showNewsAmount);
    });

    
    const newsButton = document.querySelector(`.news__button`);
    const DESKTOP_WIDTH = 1200;
    let showNewsAmount = 2;

    // Показываем/прячем новости
    newsButton.addEventListener(`click`, () => {

        // Обновляем коллекцию
        newsItem = document.querySelectorAll('.news__item');

        newsItem.forEach((item, i) => {
        
            // Если стиль новости содержит "display:flex" и это не первые 2
            // (или 3 на десктопе) новости - прячем их
            if (window.getComputedStyle(item).display === 'flex' && i >= showNewsAmount) {
                    item.style = 'display: none;'; 
            } else {
                item.style = 'display: flex;';      
            }

        });

        // Меняем кнопку
        newsButton.classList.toggle(`news__button--opened`);
        if (newsButton.textContent === `Скрыть`) {
            newsButton.textContent = `Показать еще`;
        } else {
            newsButton.textContent = `Скрыть`;
        }
    });


})();



// Логин
(() => {
    const loginButton = document.querySelector(`.menu__link--login`);
    const loginModal = document.querySelector(`.login`);
    const modalCloseButton = loginModal.querySelector(`.popup__button--close`);
    const pageBody = document.querySelector(`body`);
    const ESC__BUTTON = 27;
    
    const showLoginModal = function () {
        loginModal.classList.remove(`display-none`);
        // pageBody.classList.add(`overflow-hidden`);
    };

    const hideLoginModal = function () {
        loginModal.classList.add(`display-none`);
        // pageBody.classList.remove(`overflow-hidden`);
        document.removeEventListener(`keydown`, onEscCloseModal);
    };

    const onEscCloseModal = function (evt) {
        if (evt.keyCode === ESC__BUTTON) {
            hideLoginModal();
        }
    }

    loginButton.addEventListener(`click`, () => {
        showLoginModal();
        document.addEventListener(`keydown`, onEscCloseModal);
    })

    modalCloseButton.addEventListener(`click`, () => {
        hideLoginModal();
    })
})();
