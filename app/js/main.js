const swiper = new Swiper('.slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const headerBtn = document.querySelector('.header__dropdown')
const headerList = document.querySelector('.header__menu-list')

headerBtn.addEventListener('click', () => {
  headerBtn.classList.toggle('active')
  headerList.classList.toggle('active')
})