
interface TecnologiasProps {
    id: string;
    nome: string;
    descricao?: string;
}

interface NomesProps{
    tecnologia: TecnologiasProps[]
}


let frontend: NomesProps = {
    tecnologia: [
        { id: "12", nome: "ReactJs", descricao: "Biblioteca para criar interfaces" },
        {id: "43", nome: "VueJs"}
    ]
}

console.log(frontend.tecnologia);