
document.getElementById('submitButton').addEventListener('click', function(){
    let textareaVal = document.getElementById('more-detail').value;
    let textVal = document.getElementById('contact-by-text').value;
    if(textareaVal == ''){
      window.location = "raise-a-query-error";
    } else{
      window.location = "contract-query-confirmation";
    }
  });