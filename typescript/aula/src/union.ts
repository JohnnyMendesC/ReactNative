//union type aceita mais de um tipo
let matricula: number | string;
let preco: any; //má pratica
let logado: boolean = true;
let situacao: number = 1;

logado = Boolean(situacao);
console.log("Logado:"+logado);

situacao=0;
logado = Boolean(situacao);
console.log("Logado:"+logado);

situacao=2;
logado = Boolean(situacao);
console.log("Logado:"+logado);

matricula = "456";
matricula = 123;

console.log(matricula);
console.log(typeof (matricula));