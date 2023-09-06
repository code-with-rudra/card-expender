const slides = document.querySelectorAll('.slide');
// let flex=document.querySelectorAll('.bg-image');
slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        removeActiveclass();
        slide.classList.add('active');
        // slide.classList.toggle('active');
    });
});
function removeActiveclass() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}
