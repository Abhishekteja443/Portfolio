'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

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

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

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



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
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



// Initialize the form
// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('contact-form');
//   const statusMessage = document.getElementById('status-message');
//   const popup = document.getElementById('popup');
//   const popupMessage = document.getElementById('popup-message');
//   const submitButton = document.getElementById('submit-btn');

//   // Google Apps Script deployed as web app URL
//   const scriptURL = 'https://script.google.com/macros/s/AKfycbyKb1OArIa8NonlAWKY0KEVR5MPVs8KqOPmhE_T2F9rSWLhYXeDUmQLZNw_b3UOVOg0/exec';

//   form.addEventListener('submit', function(e) {
//       e.preventDefault();
      
//       // Show loading state
//       submitButton.disabled = true;
//       submitButton.innerHTML = '<span>Sending...</span>';
//       statusMessage.textContent = 'Submitting form...';
//       statusMessage.className = 'status-message';
      
//       // Collect form data
//       const formData = new FormData(form);
      
//       // Convert to URL-encoded string for JSONP approach
//       const urlEncodedData = new URLSearchParams(formData).toString();
      
//       // Use JSONP approach to bypass CORS
//       handleFormSubmit(urlEncodedData);
//   });

//   function handleFormSubmit(urlEncodedData) {
//       // Create a script element for JSONP request
//       const script = document.createElement('script');
      
//       // Create a unique callback function name
//       const callbackName = 'jsonpCallback_' + Date.now();
      
//       // Define the callback function
//       window[callbackName] = function(response) {
//           // Remove the script element once the response is received
//           document.body.removeChild(script);
          
//           // Handle the response
//           if (response.result === 'success') {
//               // Show success message
//               statusMessage.textContent = 'Form submitted successfully!';
//               statusMessage.className = 'status-message success';
//               form.reset();
//           } else {
//               // Show error message
//               statusMessage.textContent = 'Error submitting form. Please try again.';
//               statusMessage.className = 'status-message error';
//           }
          
//           // Re-enable the submit button
//           submitButton.disabled = false;
//           submitButton.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
          
//           // Clean up the callback function
//           delete window[callbackName];
//       };
      
//       // Create the script URL with the JSONP callback parameter
//       script.src = `${scriptURL}?${urlEncodedData}&callback=${callbackName}`;
      
//       // Handle script load errors
//       script.onerror = function() {
//           statusMessage.textContent = 'Network error. Please check your connection and try again.';
//           statusMessage.className = 'status-message error';
//           submitButton.disabled = false;
//           submitButton.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
//           document.body.removeChild(script);
//           delete window[callbackName];
//       };
      
//       // Append the script to the document to initiate the request
//       document.body.appendChild(script);
//   }
  
//   // Popup functions
//   window.showPopup = function(message) {
//       popupMessage.textContent = message;
//       popup.classList.add('active');
//   };
  
//   window.closePopup = function() {
//       popup.classList.remove('active');
//   };
// });

const f = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const popupOkButton = document.getElementById('popup-ok');

const scriptURL = 'https://script.google.com/macros/s/AKfycbwabrDHrYhiOW0dD8prSlry3No9Jv8PGSgX1BAFdGEpzpRb_TRqc8igXCuiuJhnlpJ4/exec';

f.addEventListener('submit', e => {
  e.preventDefault();

  // Create FormData object from the form
  const formData = new FormData(f);

  // Add current date and time to the form data
  const now = new Date();
  formData.append('timestamp', now.toISOString());

  fetch(scriptURL, { 
    method: 'POST', 
    body: formData 
  })
  .then(response => {
    showPopup("Thank you! Form is submitted");
  })
  .catch(error => {
    console.error('Error!', error.message);
    showPopup("Error submitting form. Please try again.");
  });
});

// Function to show the popup with a message
function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.display = 'flex';
}

// Close the popup when the OK button is clicked
popupOkButton.addEventListener('click', () => {
  // Clear the form entries
  f.reset();

  // Hide the popup
  popup.style.display = 'none';

  // Refresh the page
  location.reload();
});




