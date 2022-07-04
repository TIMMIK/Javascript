// work on data type number
let num = 1;
// isInteger - перевод --> "целое число", провуряет целое ли число или нет в data type number
console.log(Number.isInteger(num));
// pow() - помогает вычислять число в каком-то степени ( то есть первое это любое число, а второе это степень числа)  
console.log(Math.pow(5,5));// answer is 25 
// sqrt() - выводит число из под корня 
console.log(Math.sqrt(49));//answer is 7
// abs() - переводит отрицфтельное число на положительное
console.log(Math.abs(-100));// answer is 100 
// round() - округряет нецелое число
console.log(Math.round(5.6));//answer is 6
// ceil() -  округряет нецелое число, даже 0.1
console.log(Math.ceil(5.1));//answer is 6
// toLocaleString() - сделает числа более читабельными 
let summa = 1000000000;
console.log(summa.toLocaleString());// 1 000 000 000
// random() - выбирает любое число
console.log(Math.random()*100);// выбирает любое число до 100
// Практика - показывает целые числа до 10
let changeable = Math.random()*10;
let charse = Math.round(changeable);
console.log(charse);