const scriptURL = 'https://script.google.com/macros/s/AKfycbxV1ErjgfnY1TygPAnkfQRzawPLdvoQQy-5Ryj7jRFxTp54bAbqnMOPnX7J_O4B7TIT/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })