let burgerNode = document.getElementById(`burger`);
let mobileMenuNode = document.querySelector(`.mobile-menu`)

burgerNode.addEventListener(`click`, function () {
      burgerNode.classList.toggle('active');
      mobileMenuNode.classList.toggle('active');
});