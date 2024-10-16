const paragrafo = document.getElementById('para');
const btn = document.getElementById('form');

btn.addEventListener('submit', function(e){
    e.preventDefault();

    const success = 'Cadastro feito com sucesso!!';

    paragrafo.innerHTML = success;
})

