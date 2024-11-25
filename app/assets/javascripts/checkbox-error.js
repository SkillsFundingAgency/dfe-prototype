
  function checkCheckbox() {
    var checkbox = document.getElementById('checkbox1-input');
    if (checkbox.checked) {
        window.location = "reviewed-list-view.html";   
     } else {
            window.location = "review-contract-error.html"
        }
  }