document.querySelector('form').addEventListener('submit', function(event) {
  // Prevent the form from being submitted normally
  event.preventDefault();

  // Collect the form data
  let names = [
      document.getElementById('name').value,
      document.getElementById('name2').value,
      document.getElementById('name3').value,
      document.getElementById('name4').value,
      document.getElementById('name5').value
  ];
  let message = document.getElementById('historia').value;

  // Prepare the data to be sent
  let data = {
      names: names,
      message: message
  };
  console.log("🚀 ~ document.querySelector ~ data:", data)

  // Send the data
  // sendData('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', data);
});


// async function sendData(url, data) {
//   const requestOptions = {
//     method: 'POST',]
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   };

//   try {
//     const response = await fetch(url, requestOptions);

//     if (!response.ok) {
//       throw new Error('Erro ao enviar os dados');
//     }

//     const responseData = await response.json();
//     console.log('Dados enviados com sucesso:', responseData);
//   } catch (error) {
//     console.error('Erro:', error);
//   }
// }