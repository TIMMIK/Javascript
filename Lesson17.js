let belgilar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+-=";
function passWord(){
  let i = 0;
  let e = "";
// while - перевод --> "пока", работает пока фунция не будет равна False
  while(i < 8){
    let num = parseInt(Math.random() * belgilar.length)
    e += belgilar[num]
    i++;
  }
  document.querySelector('input').value = e;
}