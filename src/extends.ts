
interface JogoProps{
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const left4dead: JogoProps = {
    id: "123",
    nome: "Left Dead 2",
    descricao: "jodo de tiro e acao",
    plataforma: [ "PS5", "PC"]
};

interface DLC extends JogoProps {
    novoConteudo: string[];
}

const left4deadDLC: DLC = {
    id: "90",
    nome: "Left 4 Dead - Novos Mapas",
    descricao: "4 novos mapas para jogar online",
    plataforma: ["PS4", "PS"],
    novoConteudo: ["Modo Coop", "Mais 5 hora de jogo", "Medalhas"]
};

console.log(left4deadDLC)