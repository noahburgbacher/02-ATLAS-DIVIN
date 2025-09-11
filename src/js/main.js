document
  .querySelector(".header-burger-menu")
  .addEventListener("click", function () {
    const navbarOpen = document.querySelector(".header-nav-mobile");
    if (navbarOpen) {
      navbarOpen.classList.toggle("active");
    }
  });
