


  $(function(){
    if(window.location.href.includes("/en/")){
      $('#templateMenu').load("/assets/templates/topmenuEn.html");

    }else{    $('#templateMenu').load("/assets/templates/topmenu.html");
  }
    $('#contactTemplate').load("/assets/templates/contact.html");
    $('#commanditairesRides').load("/assets/templates/commanditairesRides.html"); 
    $('#commanditairesTemplateHaut').load("/assets/templates/commanditaires.html"); 
    $('#footerTemplateRides').load("/assets/templates/footerRides.html"); 
    $('#commanditairesTemplateBas').load("/assets/templates/commanditaires.html"); 
    $('#messageCovid').load("/assets/templates/messageCovid.html"); 

    
  })


// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

