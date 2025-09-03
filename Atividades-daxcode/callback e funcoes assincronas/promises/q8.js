const apiUrl = 'https://viacep.com.br/ws/42800935/json/'


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
