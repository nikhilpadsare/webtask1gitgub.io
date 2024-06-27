// Detect scroll event and add/remove class to the body
window.addEventListener('scroll', () => {

    const body = document.body;
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});

