document.querySelector('.tugma').addEventListener("click",function (){
  let ekran = document.querySelector('.ekran') 
  // parseInt - srtingdan number data type ga o'zgartiradi
  console.log(parseInt(ekran.value));
  ekran.value = parseInt(ekran.value) + 1
});
document.querySelector('.null').addEventListener('click',function(){
  document.querySelector('.ekran').value = 0;
});