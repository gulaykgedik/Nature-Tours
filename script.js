// Menu Click
const menuOpenIcon = document.querySelector(".menu-icons.open");
const menuCloseIcon = document.querySelector(".menu-icons.close");
const navList = document.querySelector(".nav-list");

// Menu Open
menuOpenIcon.addEventListener("click", () => {
  navList.classList.add("active");
});

// Menu Close
menuCloseIcon.addEventListener("click", () => {
  navList.classList.remove("active");
});
