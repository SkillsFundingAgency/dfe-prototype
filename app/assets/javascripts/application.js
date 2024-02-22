//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

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
