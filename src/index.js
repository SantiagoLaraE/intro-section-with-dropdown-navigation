const navOpenBtn = document.querySelector(".header__mobileBtn");
const navCloseBtn = document.querySelector(".nav__closer");
const nav = document.querySelector(".nav");

const navLinksDropdown = document.querySelectorAll(
  ".main-menu > .main-menu__link"
);

const toggleDropdown = (e) => {
  const [link] = e.path.filter((item) => item.className == "main-menu__link");
  const dropdown = link.querySelector(".main-menu__dropdown");

  if (dropdown) {
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
      resetDropdown(dropdown);
    } else {
      dropdown.classList.add("active");
      dropdown.removeAttribute("style");
      dropdown.style.height = `${dropdown.dataset.height}px`;
    }
  }
};
const resetDropdown = (item) => {
  item.dataset.height = item.clientHeight;
  item.style.height = "0px";
  item.style.padding = "0";
  item.style.margin = "0";
};

const setToggleDropdown = () => {
  navLinksDropdown.forEach((item) => {
    const dropdown = item.querySelector(".main-menu__dropdown");
    if (dropdown) {
      resetDropdown(dropdown);
    }
  });
};

setToggleDropdown();

const toggleNavMobile = (e) => {
  e.stopPropagation();
  nav.classList.toggle("active");
};
navLinksDropdown.forEach((item) =>
  item.addEventListener("click", toggleDropdown)
);
navOpenBtn.addEventListener("click", toggleNavMobile, false);
navCloseBtn.addEventListener("click", toggleNavMobile, false);
