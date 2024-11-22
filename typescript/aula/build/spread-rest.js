"use strict";
//SPREAD
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(quantidadeVendas);
}
;
totalVendas(1000, 2000, 100, 400, 200, 1250);
//vai retornar = 6 vendas
//REST
function mostrarNomes(...nomes) {
    nomes.map((nome) => console.log(nome));
}
mostrarNomes("Roni", "Patricia", "Roberto");
//SPREAD
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2);
//retorna [ 1, 2, 3, 4, 5, 6 ]
//REST
const [primeiro, segundo, terceiro, ...resto] = [1, 2, 3, 4, 5, 6];
console.log(primeiro); //retona o 1
console.log(segundo); //retona o 2
console.log(terceiro); //retona o 3
console.log(resto); //retona o resto 4, 5, 6
