let num1 = parseFloat(prompt("Enter number 1 : "));
let num2 = parseFloat(prompt("Enter number 2 : "));
let operator = prompt("Enter operator : ");

alert(`Number 1 : ${num1} \nNumber 2 : ${num2} \nOperator : ${operator}`);

if (Math.random() <= 0.1) {
    if (operator == '+') {
        alert(`Mischeviously changed operator from ${operator} to -`);
        operator = '-';
    }
    if (operator == '*') {
        alert(`Mischeviously changed operator from ${operator} to +`);
        operator = '+';
    }
    if (operator == '-') {
        alert(`Mischeviously changed operator from ${operator} to /`);
        operator = '/';
    }
    if (operator == '/') {
        alert(`Mischeviously changed operator from ${operator} to *`);
        operator = '*';
    }
}

let result;
switch (operator) {
    case '+': result = num1 + num2; break;
    case '*': result = num1 * num2; break;
    case '-': result = num1 - num2; break;
    case '/': result = num2==0 ? "Can't devide by Zero" : num1 / num2; break;
    default : result="Invalid Operator"; break;
}

alert(`Result \n ${num1} ${operator} ${num2} = ${result}`);