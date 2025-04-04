let num1 = 4;
let num2 = 2;
let operacao = "/";

switch (operacao) {
    case operacao = "+":
        console.log (`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case operacao = "-":
        console.log (`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case operacao = "*":
        console.log (`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case operacao = "/":
        console.log (`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log (`Operação inválida!`);
}