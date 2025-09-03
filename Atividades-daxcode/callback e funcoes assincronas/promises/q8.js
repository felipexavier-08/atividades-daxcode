const apiUrl = 'https://viacep.com.br/ws/01001000/json/'

fetch(apiUrl)
  .then(response => {

    return response.json();
  })

  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
