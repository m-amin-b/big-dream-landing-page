const menu = document.querySelector(".menu");
const menuBtns = document.querySelectorAll(".header__icon");
const menuBtnIcons = document.querySelectorAll(".header__icon i");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", menuHandler);
});

function menuHandler() {
  if (menu.classList.contains("menu-active")) {
    menu.classList.remove("menu-active");
    menuBtnIcons[1].classList = "fa fa-bars";
  } else {
    menu.classList.add("menu-active");
    menuBtnIcons[1].classList = "fa fa-close";
  }
}