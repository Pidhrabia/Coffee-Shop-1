// Отримуємо елементи DOM
let navbar = document.querySelector('.navbar');

// Функція для блокування прокрутки
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Функція для відновлення прокрутки
function enableScroll() {
    document.body.style.overflow = 'auto';
}



// Обробник кліку для іконки меню
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    if (navbar.classList.contains('active')) {
        disableScroll(); // Блокуємо прокрутку
    } else {
        enableScroll(); // Відновлюємо прокрутку
    }
}




// Обробник кліку на весь документ
document.addEventListener('mousedown', (event) => {
    // Перевіряємо, чи клік був поза меню та чи меню відображено
    if (!event.target.closest('.navbar') && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        enableScroll(); // Відновлюємо прокрутку
    }
});



// Обробник кліку на посилання в меню
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        enableScroll(); // Відновлюємо прокрутку
    });
});



let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

