interface Curso{
    readonly id: number;
    nome: string,
    data: Date,
    preco: number,
    promocao: (preco: number) => void;
}

interface qualificacao{
    tecnologia: Curso[];
}

let backend: qualificacao = {
    tecnologia :[//passando os cursos no array
        {
            id:100, 
            nome: "Java",
            data: new Date(),
            preco: 1000,
            promocao: (preco)=>(700),        
        },
        {
            id:200, 
            nome: "C#",
            data: new Date(),
            preco: 800,
            promocao: ()=>console.log("teste"),        
        },
    ]
}

function mostrarPromocao(preco:number): void{
    console.log(`Promoção do curso: ${preco}`);
}

const novoCurso : Curso = {
    id: 1,
    nome: "Java+Javascript+MySQL",
    data: new Date(2024, 6, 10),
    preco: 3000,
    promocao: mostrarPromocao,
}

console.log(novoCurso);
novoCurso.promocao(900);
console.log(backend);
