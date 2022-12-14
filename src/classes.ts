class Loja{
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }


    criarLoja(): void{
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string {

        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`)
        })


        return `Pedido da mesa: ${mesa}`;
    }


}
    
const redBurguer = new Loja("Red Burguer", "lanches");

redBurguer.criarLoja()

const loja2 = new Loja("Sorveteria", "sorvetes");

loja2.criarLoja()


const receberPedido = redBurguer.emitirPedido(45, "Suco Gelado", "Chilito")
    
console.log(receberPedido);

