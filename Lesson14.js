// selector - documet.querySelector(".название класса в HTML");
// 1)way
const h3 = document.querySelector("h3");
console.log(h3);
// selector - document.querySelectorAll(".название класса в HTML")
// querySelectorAll - choose all ("class","id")выбирает все классы,айди и т.д
// 2)way
let h1 = document.querySelectorAll("h1");
// 3)way
console.log(document.querySelector("title"))//It's teg
// 4)way
let h2 = document.querySelector("h2")
h2.innerText = "It's not h2"
h2.id = "id"
console.log(document.getElementById("id"));
h2.classList.add("head1")//add class
h2.classList.add("head2")//add class
h2.classList.remove("head1")//remove class
// 5)way
let p = document.querySelector("p.c1")
console.log(p);