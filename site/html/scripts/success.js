document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let slideIndex = 0;

    showSlide(slideIndex);

    function showSlide(index) {
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }

   
        slides.forEach((slide, idx) => {
            if (idx === slideIndex) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        showSlide(slideIndex -= 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(slideIndex += 1);
    });
});








