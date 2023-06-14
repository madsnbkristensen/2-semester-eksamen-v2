const scriptURL = 'https://script.google.com/macros/s/AKfycbxV1ErjgfnY1TygPAnkfQRzawPLdvoQQy-5Ryj7jRFxTp54bAbqnMOPnX7J_O4B7TIT/exec';
const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(emailForm) })

    .then(response => { console.log('Success!', response)
    emailForm.reset();
  })

    .catch(error => console.error('Error!', error.message));
});
