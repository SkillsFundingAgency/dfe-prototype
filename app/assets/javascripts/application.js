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

//** AG/ Contract query error functionalities */
 document.getElementById('submitButton').addEventListener('click', function(){
      let textareaVal = document.getElementById('more-detail').value;
      let textVal = document.getElementById('contact-by-text').value;

      if(textareaVal == ''){
        // document.getElementById('textarea').classList.add("govuk-visually-hidden");
        // document.getElementById('textarea-error').classList.remove("govuk-visually-hidden");
        // document.getElementById('error1').classList.remove("govuk-visually-hidden");
        window.location = "raise-a-query-error";

      } else{
        window.location = "contract-query-confirmation";
      }
      // if(textVal == ''){
      //   document.getElementById('other').classList.add("govuk-visually-hidden");
      //   document.getElementById('other-reason').classList.remove("govuk-visually-hidden");
      //   document.getElementById('error').style.dispaly = 'block';
      //   document.getElementById('error1').classList.add("govuk-visually-hidden");
      // } else{
      //   window.location = "contract-query-confirmation";
      // }
    });
//**End */
