document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.solution');

    // Initially hide elements
    revealElements.forEach(element => {
        element.classList.add('hidden');
    });

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) { // Adjust if necessary
                element.classList.remove('hidden');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
});


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const runCounters = () => {
        counters.forEach(counter => {
            const animate = () => {
                const value = +counter.getAttribute('data-target');
                const data = +counter.innerText;

                const time = value / 200; // Adjust the speed here
                
                if(data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = value;
                }
            };
            animate();
        });
    };

    // Check if counters are in viewport
    const isInViewport = (elem) => {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Run counters when they're visible in the viewport
    const scrollHandler = () => {
        if (isInViewport(document.querySelector('.counters-container'))) {
            runCounters();
            // Remove the event listener after counters have animated
            document.removeEventListener('scroll', scrollHandler);
        }
    };

    document.addEventListener('scroll', scrollHandler);
});
