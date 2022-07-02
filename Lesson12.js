// array
let arr = [] 
arr[0] = "index in zero"
console.log(arr[0]);
//push() - добавляет новую инфу поочередно 
let ad = []
ad.push('First')
ad.push('Second')
// splice() - изменяет инфу
ad.splice(0,0,'Third')//0,0 - это порядочное место 
console.log(ad);
// pop() - выходит из data - "информация" или из текста
let poo = ad.pop('First')
console.log(poo);
console.log(ad);
// join - added something
console.log(ad.join(": I'm not fullstack developer"));
// sort - показывает буквы в алфавитном порядке
let sour = ["Shokha","Tima","Mirjahon"]
console.log(sour.sort());
// reverse - показывает от конца до начало, то есть как бы наоборот
let rev = [1,2,3,4,5]
console.log(rev.reverse());
