// createElement - создаёт тег
console.log(document.createElement("span"));
let div = document.createElement("div")
div.classList.add("dev")
console.log(div);
console.log(div.innerText = "It's div");
 
let h1 =  document.querySelector("h1")
// appendChild - добавляет ребенка
h1.appendChild(div)
// href - добавляет ссылку
let a = document.querySelector("a")
a.href = "https://www.youtube.com/"
a.style.color = "red"
// setTimeout() - устанавливает время на выполнение чего-либо, such as transition
setTimeout(function() {
  a.remove()
},2000)