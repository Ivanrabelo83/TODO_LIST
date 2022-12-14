"use strict";
function mostraPromocao(preco) {
    console.log(`Promoção no curso por apenas: R$ ${preco}`);
}
const novoCurso = {
    id: "1",
    nome: "Curso Typerscript",
    preco: 750,
    promocao: mostraPromocao
};
console.log(novoCurso.promocao(250));
const vendedor = {
    vendedor: "Roberto",
    placa: 2312,
    ano: 2023,
    preco: 1500,
    carro: "fiat"
};
const vendido = vendedor;
console.log(vendedor);
console.log(`O ${vendido.carro} vendido  pelo vendedor ${vendido.vendedor} foi vendido por ${vendido.preco}`);
