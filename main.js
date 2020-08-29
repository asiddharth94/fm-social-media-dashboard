var toggleButton = document.querySelector(".toggle-btn");
var container = document.querySelector(".container");
var topBackground = document.querySelector(".background-top");
var headings = document.querySelectorAll("h1, h2");
var items = document.querySelectorAll(".grid-item-view");
var statNumbers = document.querySelectorAll(".stat-numbers");
var toggleSlider = document.querySelector(".inner-circle");

toggleButton.addEventListener("click", function () {

  toggleButton.classList.toggle("toggle-btn-light");

  container.classList.toggle("background-light");
  topBackground.classList.toggle("background-top-light");

  headings.forEach((item) => {
    item.classList.toggle("heading-light");
  });

  items.forEach((item) => {
    item.classList.toggle("item-view-light");
  });

  statNumbers.forEach((item) => {
    item.classList.toggle("item-numbers-light");
  });

  toggleSlider.classList.toggle("toggle-slider");

});
