function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var content = document.querySelector(".content");
    
    if (sidenav.style.right === "0px" || sidenav.style.right === "") {
        sidenav.style.right = "-100%";
    } else {
        sidenav.style.right = "0px";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 500,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
    });

    const textItems = document.querySelectorAll('.home-top-carousel-text li');
    
    swiper.on('slideChange', function () {
        textItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === swiper.realIndex) {
                item.classList.add('active');
            }
        });
    });

    // Activate the first text item on page load
    textItems[0].classList.add('active');

    // Function to resize and position background images
    function resizeBackgroundImages() {
        const slides = document.querySelectorAll('.swiper-slide:not(.video-slide)');
        slides.forEach(slide => {
            const img = new Image();
            img.src = slide.dataset.src;
            img.onload = function() {
                const imgRatio = img.width / img.height;
                const slideRatio = slide.clientWidth / slide.clientHeight;
                
                if (imgRatio > slideRatio) {
                    slide.style.backgroundSize = 'auto 100%';
                } else {
                    slide.style.backgroundSize = '100% auto';
                }
                
                slide.style.backgroundImage = `url('${img.src}')`;
            }
        });
    }

    // Call the function on load and resize
    window.addEventListener('load', resizeBackgroundImages);
    window.addEventListener('resize', resizeBackgroundImages);
});