// function - функция (для разделения кодов);
function className(aClass = 'aClass ',bClass = 15){
  console.log('number and string' + aClass + bClass);
};
className();//обязательно
//return - повторяет в начало информации (тут начало тег --> some(20);)

// 1) way
function some(song){
  if(song < 10){
    return "It's if"
  }else{
    return "It's else"
  }
} 
some(20);
let here = some(15);
console.log(here);

// 2) way
const ret = " - age of Mirjahon "
let nano = mur(7,8) + ret;
function mur(d,n){
  const something = d + n;
  return something;
}
console.log(nano)

// 3) way
const fifa = 300;
let nur = mimo(100,200,fifa);
function mimo(a,b,c){
  let xs = a + b + c;
  if(a && b >= c){
    console.log("Continue");
  }
  else if(c + b <= a){
    console.log("Not true"); 
  }
  else{
    console.log("True");
  }
  return xs;
}
console.log(nur);