const form = document.querySelector('form')

let lista = [];
let linhas = '';

console.log(lista)

form.addEventListener('submit', function(e){
    e.preventDefault();

    addContato();
    copo();
})

function addContato(){
    var inputNome = document.getElementById('Nome')
    var inputTelefone = document.getElementById('Telefone')

    if(lista.includes(inputNome.value)){

        alert('Esse contato já existe')

    }else{

        lista.push(inputNome.value)
        lista.push(inputTelefone.value)

        let linha = '<tr>';

        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
    
        linhas += linha
    }

    inputNome.value = '';
    inputTelefone.value = '';


}

function copo(){
    var copor = document.querySelector('tbody')
        copor.innerHTML = linhas;
}