"use strict";
let loja;
loja = {
    nome: "BK",
    endereco: "Rua x",
    status: true,
};
const BurguerK = {
    nome: "Burgão FPS",
    endereco: "Rua jose moreira",
    status: true,
};
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criaca com sucesso`);
    console.log(`Endereço da loja ${endereco}`);
    console.log(`Status da loja ${status}`);
}
novaLoja({ nome: "Red Burguer", endereco: "Rua ali na esquina", status: false });
