document.addEventListener('DOMContentLoaded', function () {
    // Get the selected radio button from localStorage
    let selectedRadio = localStorage.getItem('selectedRadio');
    
    // Check if there's a stored value for selected radio
    if (selectedRadio === 'first') {
        document.getElementById('contract-1').checked = true;  // Mark first radio as checked
    } else if (selectedRadio === 'second') {
        document.getElementById('contract-2').checked = true;  // Mark second radio as checked
    }else if (selectedRadio === 'third') {
        document.getElementById('contract-3').checked = true;  // Mark second radio as checked
    }

    // Optionally, clear the localStorage after it's used to avoid stale data 
    localStorage.removeItem('selectedRadio');
});
