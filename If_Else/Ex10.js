let ano = 2000;
let divisivelPor400 = ano % 400 === 0;

if (divisivelPor400 === true) {
    console.log (`É um ano bissexto!`);
} else {
    console.log (`Não é um ano bissexto!`);
}