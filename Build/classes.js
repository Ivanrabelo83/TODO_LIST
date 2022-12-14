"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido da mesa: ${mesa}`;
    }
}
const redBurguer = new Loja("Red Burguer", "lanches");
redBurguer.criarLoja();
const loja2 = new Loja("Sorveteria", "sorvetes");
loja2.criarLoja();
const receberPedido = redBurguer.emitirPedido(45, "Suco Gelado", "Chilito");
console.log(receberPedido);
