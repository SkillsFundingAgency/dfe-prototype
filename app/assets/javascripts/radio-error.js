function checkRadio() {
    var radio1 = document.getElementById('radio1');
    var radio2 = document.getElementById('radio2');

    if (radio1.checked) {
        window.location = "../list-view-reviewed.html";  
    }
        else if(radio2.checked) 
        {
            window.location = "../list-view.html";  
        }
     
     else {
            window.location = "amended-contract-error1.html"
        }
    }
    function checkRadio1() {
        var radio1 = document.getElementById('radio3');
        var radio2 = document.getElementById('radio4');
    
        if (radio1.checked) {
            window.location = "../list-view-all.html";  
        }
            else if(radio2.checked) 
            {
                window.location = "../list-view-signed.html";  
            }
         
         else {
                window.location = "amended-contract-error.html"
            }
        }