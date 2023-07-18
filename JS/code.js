var form = document.getElementById('formulario');
var palavra = document.getElementById('palavra');
form.addEventListener("submit", function(e){
    console.log(palavra.value);
    e.preventDefault(); // impede o envio do form

});

