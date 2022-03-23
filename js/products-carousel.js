(function() {

    const slides = [
        '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
        '<div><img src="img/banana.svg" alt="Banana"></div>',
        '<div><img src="img/girl.svg" alt="Girl"></div>',
        '<div><img src="img/viking.svg" alt="Viking"></div>'
    ];

    let currentSlideIdx = 0;

    const carouselContainer = document.querySelector('.products-carousel__inner');

    function renderCarousel() {
        let slidesVisible = 1;
        carouselContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            carouselContainer.innerHTML += slides[secondSlideIdx];
            slidesVisible++;
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                carouselContainer.innerHTML += slides[thirdSlideIdx];
                slidesVisible++;
            }
        }
        updateIndicators(slidesVisible);
    }

    function updateIndicators(slidesVisible) {
        const indicatorsContainer = document.querySelector('.products-carousel .indicators');
        indicatorsContainer.innerHTML = '';
        for (let i = 0; i < slides.length; i++) {
            const indicator = document.createElement('button');
            indicator.addEventListener('click', () => {
                currentSlideIdx = i;
                renderCarousel();
            });
            if (i >= currentSlideIdx && i < currentSlideIdx + slidesVisible) {
                indicator.classList.add('visible');
            }
            indicator.innerText = i + 1;
            indicatorsContainer.appendChild(indicator);
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    setInterval(nextSlide, 5000);

    const buttonNext = document.querySelector('.products-carousel__next');
    buttonNext.addEventListener('click', nextSlide);

    // Зробити щоб працювала кнопка "назад"
    function previousSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }
      
    const buttonPrevious = document.querySelector('.products-carousel__back');
    buttonPrevious.addEventListener('click', previousSlide);

    renderCarousel();

    window.addEventListener('resize', renderCarousel);

})();