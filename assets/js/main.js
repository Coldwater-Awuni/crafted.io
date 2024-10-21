




// document.getElementById('mail').addEventListener('click', function () {
//     // Prepare the email data
//     const emailData = {
//         to: 'danielawuni53@gmail.com',
//         subject: 'Newsletter',
//         text: "Welcome to the Craft'd Habitat Newsletter",
//         html: "<p>Welcome to the Craft'd Habitat Newsletter</p>"
//     };
//     // re_bTGrrt8v_6jBiKETrihqwAhh3P9QaUibono  ;;;;resend secreat key
//     // Send the request to the backend server
//     fetch('http://localhost:3000/send-email', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(emailData),
//     })
//     .then(response => response.text())
//     .then(result => {
//         console.log('Email sent:', result);
//     })
//     .catch(error => {
//         console.error('Error sending email:', error);
//     });
// });



// Function to close the popup
function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
}


// nav

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const menuItems = document.querySelectorAll('.menu-item');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');

        if (submenu) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('active');
                }
            });
        }
    });
    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && e.target !== hamburger) {
            sidebar.classList.remove('active');
        }
    });
});


// Select all menu items that have submenus
const menuItems = document.querySelectorAll('.menu-item.has-submenu > a');

menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Toggle active class on the parent menu item
        const parentMenuItem = this.parentElement;
        parentMenuItem.classList.toggle('active');

        // Optionally, close other submenus when one is opened (accordion effect)
        menuItems.forEach(otherItem => {
            if (otherItem !== this && otherItem.parentElement.classList.contains('active')) {
                otherItem.parentElement.classList.remove('active');
            }
        });
    });
});







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


const homeSwiper = document.querySelectorAll('.carousel')

const swiperParams = {
// slidesPerView: 1,
loop: true,
// speed: 4000,
navigation:"false",
// pagination:true,
// autoplay:false,
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


