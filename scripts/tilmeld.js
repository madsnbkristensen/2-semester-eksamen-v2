// JavaScript
function changeButtonContent(event) {
    event.preventDefault(); // Prevent form submission
    
    var nameInput = document.getElementById('nyhedsbrev-navn');
    var emailInput = document.getElementById('nyhedsbrev-email');
    var button = document.getElementById('tilmeldBtn');
    
    if (nameInput.value !== '' && emailInput.value !== '') {
      button.innerHTML = '<i class="fas fa-check"></i>';
    }
  }
  
  // Add event listener to the form submission
  var form = document.querySelector('form');
  form.addEventListener('submit', changeButtonContent);
  