// function to show/hide nav list items on mobile view

let toggleNavDisplay = () => {
  let navList = document.querySelector(".nav-lists");
  navList.classList.toggle("nav-lists-display");
};

// function to toggle menu and change the thr toggle display
let toggleMenu = () => {
  let toggleBar = document.querySelectorAll(".toggle");
  let navList = document.querySelector(".nav-lists");

  toggleBar.forEach((bar, i) => {
    bar.classList.toggle(`toggle-open-${i + 1}`);
  });

  navList.classList.toggle("nav-lists-display");
};
document.querySelector(".toggle-menu").addEventListener("click", toggleMenu);

// function to reset toggle menu once the browser is resized
let resetToggleMenu = () => {
  let toggleBar = document.querySelectorAll(".toggle");
  let navList = document.querySelector(".nav-lists");

  if (window.innerWidth < 768) {
    toggleBar.forEach((bar, i) => {
      bar.classList.remove(`toggle-open-${i + 1}`);
    });

    navList.classList.remove("nav-lists-display");
  }
};
window.addEventListener("resize", resetToggleMenu);

// resetting once a link in the mobile view is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', resetToggleMenu)
})
