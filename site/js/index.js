let burgerNode = document.getElementById(`burger`);
let mobileMenuNode = document.querySelector(`.mobile-menu`)

window.addEventListener(`click`, function (event) {
      if (event.target == burgerNode || burgerNode.contains(event.target)) {
            burgerNode.classList.toggle('active');
            mobileMenuNode.classList.toggle('active');
      } else {
            burgerNode.classList.remove('active');
            mobileMenuNode.classList.remove('active');
      }
      // console.log(event.target);
      // console.log(burgerNode)
});

window.addEventListener('resize', function () {
      if (this.window.innerWidth > 768){
            burgerNode.classList.remove('active');
            mobileMenuNode.classList.remove('active');
      }
  });