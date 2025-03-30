let salario = 1600;
let desconto1 = salario * 10/100;
let desconto2 = salario * 5/100;

if (salario > 2000) {
    console.log (`O salário final é R$${salario - desconto1}`);
} else {
    console.log (`O salário final é R$${salario - desconto2}`);
}