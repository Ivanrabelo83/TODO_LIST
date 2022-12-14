// FUNCOES

// let n1: number = 10;
// let n2: number = 25;

// function soma(valo1: number, valor2: number): number {

//     let soma = valo1 + valor2;
//     return soma;

// }

// console.log(soma(n1, n2))


// AULA 02 - ARROW FUNCTIONS

// const retornoAPI = (url: string): void => {
//     console.log('URL DA API', url)
// };

// retornoAPI("www.google.com")

// AULA 03 -  VALOR DEFAULT FUNCTIONS

// function cadastro(email: string, senha: string, nome: string): void {
//     let data = { email, senha, nome };

//     console.log(data)
// }

// cadastro("teste@teste.com", "121212", "Ivan Rabelo")


// AULA 04  - PARANS

// function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number) {
    
//     const total = venda1 + venda2 + venda3 + venda4;

//     console.log(total)

//     return total

    
// }

// totalVendas(12, 20, 30,49)

// REST

// function taotalVendas(...vendas: number[]): void {
//     const quantVendas = vendas.length;
    
//     console.log(`voce tem ${quantVendas} vendas hoje!` );
// }

// taotalVendas(15, 15, 15);


// function mostraNomes(...nomes: string[]) {
//     nomes.map(nome => {
//         console.log(nome);
//     })
// }
// mostraNomes("Ivan", "Jose", "Chico")


 



// INTERFACE COM FUNCOES

interface CursoProps{
    id: string;
    nome: string;
    preco: number;

// DEFINIR APENAS A FUNCAO E O QUE ELA DEVE ESPERAR E RETORNAR
    promocao: (preco: number) => void;
        
 }

function mostraPromocao(preco: number) {
    
   console.log(`Promoção no curso por apenas: R$ ${preco}`)

}

const novoCurso: CursoProps = {
    id: "1",
    nome: "Curso Typerscript",
    preco: 750,
    promocao: mostraPromocao
}

console.log(novoCurso.promocao(250))



interface vendaCarro {
    vendedor: string;
    placa: number;
    ano: number;
    preco: number;
    carro: string;

}

const vendedor: vendaCarro = {
    vendedor: "Roberto",
    placa: 2312,
    ano: 2023,
    preco: 1500,
    carro: "fiat"
}



const vendido = vendedor;

console.log(vendedor)


console.log(`O ${vendido.carro} vendido  pelo vendedor ${vendido.vendedor} foi vendido por ${vendido.preco}` );






