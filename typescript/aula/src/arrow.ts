//ex1
const arrow = (username: string): string => {
    let message = "Olá world! " + username;
    return message;
};
console.log(arrow("Hello mundo! "));

//ex2 nome tipado, situação por default true, email opcional retornam um bool
function cadastro(nome: string, situacao = true, email?: string): boolean {
    console.log(`
        Nome: ${nome} 
        Situação: ${situacao} 
        Email: ${email}
        `);
    return true;
}
cadastro("");
cadastro("José", false, "j@gmail.com");