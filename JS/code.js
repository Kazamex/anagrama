var form = document.getElementById('formulario');
var palavra = document.getElementById('palavra');

form.addEventListener("submit", function(e){
    var anagrama = '';
    var caractersVetor = [];
    var qtCaracteres = palavra.value.length;
    //Gera um vetor com caracter e booleano para confirmação de uso
    for(i=0;i<qtCaracteres;i++){
        caractersVetor.push({
            caracter:palavra.value.substr(i,1),
            utilizado:false
        });
    }

    //Gerando o anagrama
    for(i=0;i<qtCaracteres;i++){
        var sair = false;
        while(sair==false){
            var numero = gerarNumero(qtCaracteres);
            if(!caractersVetor[numero].utilizado){
                anagrama = anagrama + caractersVetor[numero].caracter;
                caractersVetor[numero].utilizado=true;
                sair = true;
            }
        }
    }
    e.preventDefault(); // impede o envio do form
});

function gerarNumero(limite){
    return parseInt((Math.floor(Math.random() * limite )));
}