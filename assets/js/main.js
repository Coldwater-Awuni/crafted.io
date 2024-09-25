function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var content = document.querySelector(".content");
    
    if (sidenav.style.right === "0px" || sidenav.style.right === "") {
        sidenav.style.right = "-100%";
    } else {
        sidenav.style.right = "0px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const fancyItems = document.querySelectorAll(".fancy-skew__list li");

  fancyItems.forEach(item => {
      const linkWrapper = item.querySelector(".link-wrapper");
      const subtitle = item.querySelector(".fancy-skew__subtitle");

      // Hover on
      item.addEventListener("mouseenter", () => {
          item.classList.add("active");
          subtitle.style.opacity = "1"; // Show subtitle
      });

      // Hover off
      item.addEventListener("mouseleave", () => {
          item.classList.remove("active");
          subtitle.style.opacity = "0"; // Hide subtitle
      });
  });

  // Scroll effect for perspective origin
  window.addEventListener("scroll", throttle(updatePerspective, 100));

  function updatePerspective() {
      const fancySkew = document.querySelector(".fancy-skew");
      if (fancySkew) {
          const boundingBox = fancySkew.getBoundingClientRect();
          const vanishingPoint = window.innerHeight / 2;
          const center = boundingBox.top + boundingBox.height / 2;
          const yPos = Math.round((center - vanishingPoint) / 4);

          fancyItems.forEach(item => {
              item.style.perspectiveOrigin = `50% ${-yPos}px`;
          });
      }
  }

  // Throttle function to limit scroll events
  function throttle(fn, time) {
      let inThrottle;
      return function () {
          if (!inThrottle) {
              fn.apply(this, arguments);
              inThrottle = true;
              setTimeout(() => {
                  inThrottle = false;
              }, time);
          }
      };
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const swiper = new Swiper('.swiper', {
//         loop: true,
//         speed: 5000,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         autoplay: {
//             delay: 5000,
//         },
//     });

//     const textItems = document.querySelectorAll('.home-top-carousel-text li');
    
//     swiper.on('slideChange', function () {
//         textItems.forEach((item, index) => {
//             item.classList.remove('active');
//             if (index === swiper.realIndex) {
//                 item.classList.add('active');
//             }
//         });
//     });

//     // Activate the first text item on page load
//     textItems[0].classList.add('active');

//     // Function to resize and position background images
//     function resizeBackgroundImages() {
//         const slides = document.querySelectorAll('.swiper-slide:not(.video-slide)');
//         slides.forEach(slide => {
//             const img = new Image();
//             img.src = slide.dataset.src;
//             img.onload = function() {
//                 const imgRatio = img.width / img.height;
//                 const slideRatio = slide.clientWidth / slide.clientHeight;
                
//                 if (imgRatio > slideRatio) {
//                     slide.style.backgroundSize = 'auto 100%';
//                 } else {
//                     slide.style.backgroundSize = '100% auto';
//                 }
                
//                 slide.style.backgroundImage = `url('${img.src}')`;
//             }
//         });
//     }

//     // Call the function on load and resize
//     window.addEventListener('load', resizeBackgroundImages);
//     window.addEventListener('resize', resizeBackgroundImages);
// });

const homeSwiper = document.querySelectorAll('.mycarousel')

const swiperParams = {
slidesPerView: 1,
loop: true,
speed: 4000,
navigation:"true",
pagination:true,
autoplay:false,
on: {
  init() {
    // ...
  },
},
};





homeSwiper.forEach(element => {
  Object.assign(element, swiperParams);
  element.initialize();
  // element.swiper.autoplay = false;
});