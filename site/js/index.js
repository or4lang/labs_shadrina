//НЕ СМОТРЕТЬ!!!

// let burgerNode = document.getElementById(`burger`);
// let mobileMenuNode = document.querySelector(`.mobile-header__nav`)

// function closeMenu() {
//       burgerNode.classList.remove('active');
//       mobileMenuNode.classList.remove('active');
//       burgerNode.setAttribute('aria-expanded', 'false');
// };


// document.addEventListener(`click`, function (event) {
//       if (event.target === burgerNode || burgerNode.contains(event.target)) {
//             const isOpen = burgerNode.getAttribute('aria-expanded') === 'true';
//             burgerNode.classList.toggle('active');
//             mobileMenuNode.classList.toggle('active');
//             burgerNode.setAttribute('aria-expanded', !isOpen);
//       } else {
//             closeMenu();
//       }
//       // console.log(event.target);
//       // console.log(burgerNode)
// });

// window.addEventListener('resize', function () {
//       if (window.innerWidth > 768) {
//             closeMenu();
//       }
// });


//Нейронка подправила
const burgerNode = document.getElementById('burger');
const mobileMenuNode = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenuNode.querySelectorAll('a');

function openMenu() {
      burgerNode.classList.add('active');
      mobileMenuNode.classList.add('active');
      burgerNode.setAttribute('aria-expanded', 'true');
      burgerNode.setAttribute('aria-label', 'Закрыть меню');
};

function closeMenu() {
      burgerNode.classList.remove('active');
      mobileMenuNode.classList.remove('active');
      burgerNode.setAttribute('aria-expanded', 'false');
      burgerNode.setAttribute('aria-label', 'Открыть меню');
};

burgerNode.addEventListener('click', function () {
      const isOpen = burgerNode.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
            closeMenu();
      } else {
            openMenu();
      };
});

mobileMenuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
            closeMenu();
      });
});

document.addEventListener('click', function (event) {
      const isClickInsideMenu = mobileMenuNode.contains(event.target);
      const isClickOnBurger = burgerNode.contains(event.target);
      if (!isClickInsideMenu && !isClickOnBurger) {
            closeMenu();
      };
});

window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
            closeMenu();
      };
});