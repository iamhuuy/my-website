const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list ul li');

    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        // burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
