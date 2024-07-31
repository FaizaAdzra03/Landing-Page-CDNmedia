document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("hamburger");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});

const accordionItemHeader = document.querySelectorAll(".accordion-item-header");

accordionItemHeader.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
