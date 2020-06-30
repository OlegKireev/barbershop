// Валидация

// input__phone
const form  = document.getElementsByTagName('form')[0];

const phone = document.querySelector('.enroll__input--phone');
const phoneError = document.querySelector('.enroll__input--phone + .input__error');


phone.addEventListener('input', () => {
    // При каждом набранном символе в поле - проверяем свойство validity поля

    if (phone.validity.valid) {
        // Если показано сообщение об ошибке и если поле валидно - скрываем ощибку
        phoneError.innerHTML = ''; // Обнуляем текс ошибки
        phoneError.classList.remove('input__error--active'); // Удаляем активный класс у блока с ошибкой
    } else {
        // Если поле до сих пор не валидно - показываем конкреткую ошибку
        showError();
    }
});

form.addEventListener('submit', (evt) => {
    // Если поле валидно, позволяем форме отправиться
    
    if(!phone.validity.valid) {
        // Если поле не валидно, показываем конкретную ошибку
        showError();
        // Отменяем отправку формы
        evt.preventDefault();
    }    

});

function showError() {
    if(phone.validity.valueMissing) {
        // Пустое поле
        phoneError.textContent = 'Необходимо ввести ваш номер телефона';
    } else if(phone.validity.patternMismatch) {
        // Не соотвествует формату pattern
        phoneError.textContent = 'Номер должен быть в формате +79001234567 или 89001234567';
    } else if(phone.validity.tooShort) {
        // Слишком короткое
        phoneError.textContent = `В номере должно содержаться как минимум ${ phone.minLength } цифр; Вы ввели ${ phone.value.length }.`;
    }

    // Показываем сообщение об ошибке
    phoneError.classList.add('input__error--active');
}


// Маска телефона

// let selector = document.querySelector('.enroll__input--phone');

// var im = new Inputmask("99-9999999");
// im.mask(selector);