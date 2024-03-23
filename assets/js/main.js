// Отримуємо елементи DOM
let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-icon'); // Отримуємо іконку меню

// Функція для блокування прокрутки
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Функція для відновлення прокрутки
function enableScroll() {
    document.body.style.overflow = 'auto';
}

// Функція для закриття меню
function closeMenu() {
    navbar.classList.remove('active');
    enableScroll(); // Відновлюємо прокрутку
}

// Обробник кліку для іконки меню
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    if (navbar.classList.contains('active')) {
        disableScroll(); // Блокуємо прокрутку
    } else {
        enableScroll(); // Відновлюємо прокрутку
    }
});

// Обробник кліку на весь документ
document.addEventListener('click', (event) => {
    // Перевіряємо, чи клік був поза меню та чи меню відображено
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target) && navbar.classList.contains('active')) {
        closeMenu(); // Закриваємо меню
    }
});

// Обробник кліку на посилання в меню
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu(); // Закриваємо меню
    });
});

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
