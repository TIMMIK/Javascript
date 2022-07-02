// JSON - это объект или массив внутри ковычки
let json = '[]'
let arr = '{}'
// fetch - Интерфейс Fetch API позволяет веб-браузеру выполнять HTTP-запросы к веб-серверам.
//lesson on youtube
fetch('https://randomuser.me/api/')
.then(anyClassname => anyClassname.json())
.then(className => {
  document.querySelector(".an1").innerText = className.results[0].name.first
  document.querySelector(".an2").innerText = className.results[0].name.last
  document.querySelector(".location").innerText = className.results[0].location
  document.querySelector(".login").innerText = className.results[0].login
  document.querySelector(".email").innerText = className.results[0].email
  console.log(className.results[0].name.last)
  console.log(className.results[0]);

  document.querySelector(".img").src = className.results[0].picture.medium
  
  // условия [?] - such as IF & [:] - such as ELSE
  let smth = className.results[0].gender == 'male' ? 'MALE' : 'FEMALE';
  document.querySelector(".gender").innerText = smth;

});