"use strict";

/**
 * Function to toggle the 'active' class on a given element.
 * @param {HTMLElement} elem - The element to toggle the class on.
 */
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar elements
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

/**
 * Event listener for the sidebar button. Toggles the 'active' class on the sidebar when clicked.
 */
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Testimonials elements
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal elements
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalTime = document.querySelector("[data-modal-datetime]");
const modalText = document.querySelector("[data-modal-text]");

/**
 * Function to toggle the 'active' class on the modal container and overlay.
 */
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

/**
 * Event listeners for each testimonial item. When clicked, the modal image, title, and text are updated
 * and the modal is made active.
 */
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;
    modalTime.innerHTML = this.querySelector(
      "[data-testimonials-time]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

/**
 * Event listeners for the modal close button and overlay. When clicked, the modal is made inactive.
 */
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select elements
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

/**
 * Event listener for the select element. When clicked, the 'active' class is toggled on the select element.
 */
select.addEventListener("click", function () {
  elementToggleFunc(this);
});

/**
 * Event listeners for each select item. When clicked, the select value is updated and the select element is made inactive.
 * Additionally, the filter function is called with the selected value.
 */
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Filter elements
const filterItems = document.querySelectorAll("[data-filter-item]");

/**
 * Function to filter items based on a selected value. If the selected value is 'all', all items are made active.
 * If the selected value matches the item's category, the item is made active. Otherwise, the item is made inactive.
 * @param {string} selectedValue - The selected value to filter by.
 */
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// Last clicked filter button
let lastClickedBtn = filterBtn[0];

/**
 * Event listeners for each filter button. When clicked, the select value is updated and the filter function is called
 * with the selected value. Additionally, the 'active' class is removed from the last clicked button and added to the
 * current button.
 */
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Contact form elements
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

/**
 * Event listeners for each form input field. When the input changes, the form is validated. If the form is valid,
 * the form button is enabled. Otherwise, the form button is disabled.
 */
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Page navigation elements
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

/**
 * Event listeners for each navigation link. When clicked, the corresponding page is made active and all other pages
 * are made inactive. Additionally, the 'active' class is added to the clicked navigation link and removed from all
 * other navigation links.
 */
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
