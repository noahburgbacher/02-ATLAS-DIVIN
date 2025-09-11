document
  .querySelector(".header-burger-menu")
  .addEventListener("click", function () {
    const navbarOpen = document.querySelector(".header-nav-mobile");
    if (navbarOpen) {
      navbarOpen.classList.toggle("active");
    }
  });

// Dark Mode Toggle
document.querySelectorAll(".header-dark-mode").forEach((btn) => {
  btn.addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Toggle variables in :root
    const root = document.documentElement;
    if (body.classList.contains("dark-mode")) {
      root.style.setProperty("--blue", "#A3D7FF");
      root.style.setProperty("--yellow", "#F7F43E");
      root.style.setProperty("--green", "#76E5B5");
      root.style.setProperty("--red", "#F8A7A7");
      root.style.setProperty("--grey", "#696A6C");
      root.style.setProperty("--background", "#515050");
      root.style.setProperty("--text", "#F7F6F6");
      root.style.setProperty("--text-secondary", "#FFFFFF");
    } else {
      root.style.setProperty("--blue", "#279ef8");
      root.style.setProperty("--yellow", "#f8af27");
      root.style.setProperty("--green", "#12965d");
      root.style.setProperty("--red", "#f82727");
      root.style.setProperty("--grey", "#bcbfc3");
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--text", "#515050");
      root.style.setProperty("--text-secondary", "#000000");
    }

    // Update all dark/bright mode icons for all buttons
    document.querySelectorAll(".header-dark-mode-icon").forEach((icon) => {
      icon.style.display = body.classList.contains("dark-mode")
        ? "none"
        : "block";
    });
    document.querySelectorAll(".header-bright-mode-icon").forEach((icon) => {
      icon.style.display = body.classList.contains("dark-mode")
        ? "block"
        : "none";
    });
  });
});
