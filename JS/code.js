var form = document.getElementById('formulario');
var palavra = document.getElementById('palavra');

form.addEventListener("submit", function(e){
    var anagramas = [];
    var htmlConteudo = '';
    for(j=0;j<20;j++){
        console.log(j);
        anagramas.push(gerarAnagrama());
    }
    console.log(anagramas)
    htmlConteudo = gerarConteudoTabela(anagramas);
    console.log(htmlConteudo);
    let tabelaAnagramas = document.getElementById("tabelaAnagramas");
    tabelaAnagramas.innerHTML = "";
    tabelaAnagramas.innerHTML += htmlConteudo;

    e.preventDefault(); // impede o envio do form
});

function gerarConteudoTabela(anagramas){
    var texto="";
    var x = 0;
    for(lin=0;lin<5;lin++){
        texto = texto + "<tr>";
        for(col=0;col<4;col++){
            texto = texto + "<td>" + anagramas[x] + "</td>";
            x++;
        }
        texto = texto + "</tr>";
    }
    return texto;
}

function gerarAnagrama(){
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

    return anagrama;
}

function gerarNumero(limite){
    return parseInt((Math.floor(Math.random() * limite )));
}