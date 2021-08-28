const swiper = new Swiper(".slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const headerBtn = document.querySelector(".header__dropdown");
const headerList = document.querySelector(".header__menu-list");

headerBtn.addEventListener("click", () => {
  headerBtn.classList.toggle("active");
  headerList.classList.toggle("active");
});

const smoothLinks = document.querySelectorAll('a[href="#form"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

window.onload = function () {
  var cssLink = document.createElement("link");
  cssLink.href = "css/style.min.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";
  document.getElementById("iframe").contentDocument.head.appendChild(cssLink);

  console.log(document.getElementById("iframe").contentDocument);
};
