/*função que adiciona o nome dos jogadores */
function adicionar(){
    var listainicial = document.getElementById("lista").value
    var jogadores = document.getElementById("jogares-selecionados")
    var jogadoresarray = listainicial.split("\n")
    jogadores.innerHTML = ''
    for (let a = 0; a < jogadoresarray.length; a++) {
        jogadores.innerHTML += jogadoresarray[a] + "<br>"   
    }
    console.log(jogadoresarray)
}
/*função que sorteia o nome dos jogadores */
function sortear(){
    var qtimes = Number(document.getElementById('times').value)
    var listainicial = document.getElementById("lista").value
    var jogadoressorte = document.getElementById("jogares-sorteados")
    var jogadoresarrayinic = listainicial.split("\n")
    //essa função embaralha a array principal
    function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos (Destructuring)
    }
    return array;
}
    // Exemplo de uso:
    var jogadoresarray = embaralhar(jogadoresarrayinic);
    console.log(embaralhar(jogadoresarray));
    var jogadoresarray1 = []
    var jogadoresarray2 = []
    var jogadoresarray3 = []
    var jogadoresarray4 = []
    var jogadoresarray5 = []
    jogadoressorte.innerHTML = ''

    //organização da array por estrela
    for(let c = 0; c < jogadoresarray.length; c++){
        if (jogadoresarray[c][jogadoresarray[c].length - 1] == 1) {
            jogadoresarray1.push(jogadoresarray[c])
        }
    }
    for(let c = 0; c < jogadoresarray.length; c++){
        if (jogadoresarray[c][jogadoresarray[c].length - 1] == 2) {
            jogadoresarray2.push(jogadoresarray[c])
        }
    }
    for(let c = 0; c < jogadoresarray.length; c++){
        if (jogadoresarray[c][jogadoresarray[c].length - 1] == 3) {
            jogadoresarray3.push(jogadoresarray[c])
        }
    }
    for(let c = 0; c < jogadoresarray.length; c++){
        if (jogadoresarray[c][jogadoresarray[c].length - 1] == 4) {
            jogadoresarray4.push(jogadoresarray[c])
        }
    }
    for(let c = 0; c < jogadoresarray.length; c++){
        if (jogadoresarray[c][jogadoresarray[c].length - 1] == 5) {
            jogadoresarray5.push(jogadoresarray[c])
        }
    }
    jogadoresarrayn = [jogadoresarray1,jogadoresarray2,jogadoresarray3,jogadoresarray4,jogadoresarray5]
    console.log(jogadoresarray)
    console.log(embaralhar(jogadoresarrayinic))
    for (let d = 0; d < 5; d++) {
        for (let e = 0; e < 5; e++) {
            jogadoressorte.innerHTML += jogadoresarrayn[e][d] + "<br>"
        }
    }
}
/*
function adicionar(){
    var listaescolhida = document.getElementById("lista-escolhida") //aqui é onde a lista dos jogadores é mostrado
    var lista = document.getElementById('lista').value // aqui 
    var listaarray = lista.split("\n")
    var estrelasarray = []
    listaescolhida.innerHTML = ''
    for (let n = 0; n < listaarray.length; n++) {
        listaescolhida.innerHTML += listaarray[n] +("<br>")+ listaarray[n][Number([listaarray[n].length] - 1)]
        estrelasarray.push(listaarray[n][Number([listaarray[n].length] - 1)])
    }
    for (let a = 0; a < estrelasarray.length; a++) {
        if(estrelasarray[a]==5){
            alert(listaarray[a])
        }
    }
}
function sortear(){
    var listasorteada = document.getElementById("lista-sorteada")
    var lista = document.getElementById('lista').value
    var listaarray = lista.split("\n")
    var sorteados = listaarray.sort(() => Math.random() - 0.5);
    listasorteada.innerHTML = sorteados
}
    
*/