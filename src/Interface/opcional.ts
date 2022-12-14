interface CadastroProps{
    nome: string;
    email: string;
    status: boolean;
}

const novoUsuario: CadastroProps = {
    nome: "Ivan",
    email: "ivan@teste.com",
    status: true,
};

console.log(novoUsuario)