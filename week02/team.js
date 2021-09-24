(() => {
const errorMessage = '<span class="error"> Your input is invalid.</span>'; //esta e s la variable que comple la funcion de avisar el mje de error
// las variables se declaran ANTES de usarlas. CONST is used when the variable will not be reassigned to another value!
const isValidNumber = input => !isNaN(+input) && +input >= 0;/*estas flechitas significan FUNCIONES. Arrow Function. The parameters come before the arrow and the main body of the function
comes after*/
const factor = num => num > 0 ? num + factor(num - 1) : 0 ; /*Ternary Operator A shorthand way of writing an if ... else statement is to use the ternary
operator, ?, : -- condition ? (//code to run if condition is true) : (//code to run if condition is false)*/
const getNum = sel => +document.querySelector(sel).value;
const setIfValid = (sel, val) => document.querySelector(sel) .innerHTML = isValidNumber(val)
? `<span>${val}</span>` //si el numero es valido, mostrar valor
: errorMessage; //si no es valido, mostrar mensaje de error

 const echo = e => document.querySelector('#echo-results').innerHTML = `<span>${document.querySelector('#echo').value}</span>`;
 const sumInSeries = e => setIfValid('#sum-in-series-results', factor (getNum('#series')));
 const sumTwo = e => setIfValid('#sum-two-results', getNum('#add1') + getNum('#add2'));


document.querySelector('#submit-echo').addEventListener('click', echo); // conecta con ingreso de datos en linea 13
document.querySelector('#submit-series').addEventListener('click', sumInSeries); // conecta con ingreso de datos en linea 14
document.querySelector('#submit-add').addEventListener('click', sumTwo); // conecta con ingreso de datos en linea 15
})();
