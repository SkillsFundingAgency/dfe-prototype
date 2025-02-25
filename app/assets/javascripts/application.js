//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//
//** AG / Comparison radio  feature for GAG statement ref link:\views\General-annual-grant\indicative-statement2\indicative-nocomparison-statement.html*/
window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
// Get all radio buttons
var radioButtons = document.querySelectorAll('input[type=radio][name="radios"]');

// Function to handle radio button change event
function handleRadioChange(event) {
    // Get the URL associated with the selected radio button
    var selectedUrl = event.target.getAttribute('data-url');
    
    // Navigate to the URL
    window.location.href = selectedUrl;
}

// Add change event listener to all radio buttons
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', handleRadioChange);
});
   

})
//**End */

//**AG / Filter + dynamic Pagination count */
// document.addEventListener('DOMContentLoaded', function () {
//   const checkboxes = document.querySelectorAll('.govuk-checkboxes__input');
//   const paginationInfo = document.getElementById('pagination-info');

//   function updatePaginationCount() {
//       const visibleSections = document.querySelectorAll('.govuk-accordion__section:not([style*="display: none"])');
//       const count = visibleSections.length;

//       if (count > 0) {
//           paginationInfo.textContent = `Showing 1 to ${count} of 6 allocation statements`;
//       } else {
//           paginationInfo.textContent = ` Showing 1 to 6 of 6 allocation statements`;
//       }
//   }

//   function filterSections() {
//       const checkedSections = Array.from(checkboxes)
//           .filter(checkbox => checkbox.checked)
//           .map(checkbox => checkbox.value);

//       // Hide all sections first
//       document.querySelectorAll('.govuk-accordion__section').forEach(section => {
//           section.style.display = 'none';
//       });

//       if (checkedSections.length > 0) {
//           checkedSections.forEach(sectionClass => {
//               const accordionSection = document.querySelector(`.govuk-accordion__section.${sectionClass}`);
//               if (accordionSection) {
//                   accordionSection.style.display = 'block';
//               }
//           });
//       } else {
//           // If no checkboxes are checked, show all sections
//           document.querySelectorAll('.govuk-accordion__section').forEach(section => {
//               section.style.display = 'block';
//           });
//       }
//       // Update pagination count after filtering
//       updatePaginationCount();
//   }
//   // Add change event listener to each checkbox
//   checkboxes.forEach(checkbox => {
//       checkbox.addEventListener('change', filterSections);
//   });
//   // Initial display and count update
//   document.querySelectorAll('.govuk-accordion__section').forEach(section => {
//       section.style.display = 'block'; // Show all sections initially
//   });
//   updatePaginationCount(); // Initial count update
// });

// //**AG / clear filter functionality*/
// document.getElementById('clearFilters').addEventListener('click', function() {
//   // Get all filter checkboxes
//   const filters = document.querySelectorAll('.govuk-checkboxes__input');

//   // Clear all checkboxes
//   filters.forEach(filter => {
//       filter.checked = false;
//   });

//   // Show all results 
//   showAllResults();
//   function showAllResults() {
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = document.querySelectorAll('.govuk-accordion__section').forEach(section => {
//       section.style.display = 'block'; 
//       const paginationInfo = document.getElementById('pagination-info');
//       paginationInfo.textContent = ` Showing 1 to 6 of 6 allocation statements`;
      
//   }); 
//   }
// });

//**End */

// let currentPage = 1;  // Initial page
// const totalPages = 42; // Total pages available

// // Function to generate pagination dynamically
// function generatePagination(currentPage, totalPages) {
//   const paginationList = document.getElementById("pagination-list");
//   paginationList.innerHTML = ""; // Clear current pagination

//   const createPageItem = (page, isCurrent = false) => {
//     const li = document.createElement("li");
//     li.classList.add("govuk-pagination__item");
    
//     if (isCurrent) {
//       li.classList.add("govuk-pagination__item--current");
//       li.innerHTML = `<a class="govuk-link govuk-pagination__link" href="#" aria-label="Page ${page}" aria-current="page">${page}</a>`;
//     } else {
//       li.innerHTML = `<a class="govuk-link govuk-pagination__link" href="#" aria-label="Page ${page}">${page}</a>`;
//     }

//     return li;
//   };

//   const pagesToShow = [];
//   // Show pages before, current, and after with ellipses where necessary
//   if (currentPage === 1) {
//     pagesToShow.push(1, '...', 6,7,'...',totalPages);
//   } else if (currentPage === totalPages) {
//     pagesToShow.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
//   } else {
//     pagesToShow.push(1,'...', currentPage, currentPage + 1, '...', totalPages);
//   }

//   // Generate pagination items
//   pagesToShow.forEach(page => {
//     if (page === '...') {
//       const li = document.createElement("li");
//       li.classList.add("govuk-pagination__item", "govuk-pagination__item--ellipses");
//       li.innerText = '...';
//       paginationList.appendChild(li);
//     } else {
//       paginationList.appendChild(createPageItem(page, page === currentPage));
//     }
//   });

//   // Handle the previous and next buttons
//   const prevButton = document.getElementById("prev-page");
//   const nextButton = document.getElementById("next-page");

//   if (currentPage === 1) {
//     prevButton.setAttribute("aria-disabled", "true");
//     prevButton.classList.add("govuk-link--disabled");
//   } else {
//     prevButton.removeAttribute("aria-disabled");
//     prevButton.classList.remove("govuk-link--disabled");
//   }

//   if (currentPage === totalPages) {
//     nextButton.setAttribute("aria-disabled", "true");
//     nextButton.classList.add("govuk-link--disabled");
//   } else {
//     nextButton.removeAttribute("aria-disabled");
//     nextButton.classList.remove("govuk-link--disabled");
//   }
// }

// // Handle pagination item clicks
// document.getElementById("pagination-list").addEventListener("click", function(e) {
//   if (e.target.tagName === 'A') {
//     const page = parseInt(e.target.innerText);
//     if (!isNaN(page)) {
//       currentPage = page;
//       generatePagination(currentPage, totalPages);
//     }
//   }
// });

// // Handle next/prev button clicks
// document.getElementById("next-page").addEventListener("click", function(e) {
//   e.preventDefault();
//   if (currentPage < totalPages) {
//     currentPage++;
//     generatePagination(currentPage, totalPages);
//   }
// });

// document.getElementById("prev-page").addEventListener("click", function(e) {
//   e.preventDefault();
//   if (currentPage > 1) {
//     currentPage--;
//     generatePagination(currentPage, totalPages);
//   }
// });

// // Initialize the pagination on page load
// generatePagination(currentPage, totalPages);
