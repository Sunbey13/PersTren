//создаем переменную, в которую кладем кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//переменная, в которую кладем меню
//открытие-закрытие кнопкой бургер-меню
let menu = document.querySelector('.sidebar');
//отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
    //отменяем стандартное поведение ссылки
    event.preventDefault();
    //вешаем класс на меню, когда кликнули по кнопке
    menu.classList.toggle('visible');
})
//открытие-закрытие кнопкой Х
let menuClose = document.querySelector('.menu-close');
let menuC = document.querySelector('.sidebar');
menuClose.addEventListener('click', function (event) {
    event.preventDefault();
    menuC.classList.toggle('visible');
})