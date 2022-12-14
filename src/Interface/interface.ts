let loja: object;

loja = {
    nome: "BK",
    endereco: "Rua x",
    status: true,
};


interface LojaProps{
    nome: string;
    endereco: string;
    status: boolean;
}

const BurguerK: LojaProps = {
    nome: "Burgão FPS",
    endereco: "Rua jose moreira",
    status: true,
};

// console.log(BurguerK)

function novaLoja({nome, endereco, status}: LojaProps): void {
    console.log(`Loja ${nome} criaca com sucesso`)
    console.log(`Endereço da loja ${endereco}`)
    console.log(`Status da loja ${status}`)
}

novaLoja({nome: "Red Burguer", endereco: "Rua ali na esquina", status: false})