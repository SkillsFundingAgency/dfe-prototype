
// // document.getElementById('submitButton').addEventListener('click', function(){
// //     let textareaVal = document.getElementById('more-detail').value;
// //     let textVal = document.getElementById('contact-by-text').value;
// //     let radioButton = document.querySelectorAll('input[name="contact"]');
// //     for (const radio of radioButton) {
// //       if (radio.checked){
// //            if(textareaVal == ''){
// //             //if radio option selected and text area not filled
// //             //radioSelected = true;
           
// //               window.location = "raise-a-query-errors";
// //             }
// //           }
// //           //if radio options and textarea not filled or checked
// //           else if(!radio.checked){
// //             window.location = "raise-a-query-error";
// //           }
// //       }
// //     // if(textareaVal == ''){
// //     //   window.location = "raise-a-query-error";
// //     // } else{
// //     //   window.location = "contract-query-confirmation";
// //     // }
// //     // if(textareaVal == ''){
// //     //   window.location = "raise-a-query-error";
// //     // } else{
// //     //   window.location = "contract-query-confirmation";
// //     // }
  
// //   });

document.getElementById('submitButton').addEventListener('click', function () {
  let textareaVal = document.getElementById('more-detail').value;
  let radioButton = document.querySelectorAll('input[name="contact"]');
  let inputVal = document.getElementById('contact-by-text').value;
  
  let firstRadioSelected = radioButton[0].checked;  // Check if first radio is selected
  let secondRadioSelected = radioButton[1].checked; // Check if second radio is selected
  let thirdRadioSelected = radioButton[2].checked; // Check if second radio is selected

  // If the first radio button is selected and the textarea is empty
  if (firstRadioSelected && textareaVal === '') {
      // Store selected radio option in localStorage
      localStorage.setItem('selectedRadio', 'first');
      window.location = "raise-a-query-errors";  // Redirect to raise-a-query-errors
  }
  // If the second radio button is selected and the textarea is empty
  else if (secondRadioSelected && textareaVal === '') {
      // Store selected radio option in localStorage
      localStorage.setItem('selectedRadio', 'second');
      window.location = "raise-a-query-errors";  // Redirect to raise-a-query-errors
  }
  else if (thirdRadioSelected && inputVal === '') {
    // Store selected radio option in localStorage
    localStorage.setItem('selectedRadio', 'third');
    window.location = "raise-a-query-input-errors";  // Redirect to raise-a-query-errors
}
  else if (thirdRadioSelected && textareaVal === '') {
    // Store selected radio option in localStorage
    localStorage.setItem('selectedRadio', 'third');
    window.location = "raise-a-query-errors";  // Redirect to raise-a-query-errors
}
  // If a radio button is selected and the textarea is filled, redirect to confirmation page
  else if ((firstRadioSelected || secondRadioSelected || thirdRadioSelected) && textareaVal !== '') {
      window.location = "contract-query-confirmation";  // Redirect to confirmation page
  }
  // If no radio button is selected or textarea is empty, show error page
  else {
      window.location = "raise-a-query-error";  // Redirect to general error page
  }
});

