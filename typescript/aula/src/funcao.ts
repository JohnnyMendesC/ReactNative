//ex1
function login (username: string): void {
    let message = "Bem vindo " + username;
    console.log(message);
}

login("Fulano");
//ex2
function login2 (username: string): boolean {
    let message = "Bem vindo " + username;
    console.log(message);
    return true;
}
console.log(login2("Fulano"));