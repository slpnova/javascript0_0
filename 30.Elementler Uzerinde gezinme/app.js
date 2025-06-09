//html elementleri uzerinde gezinme

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
// const card = document.getElementsByClassName("card")[0];
const card = document.querySelector(".card");
console.log(card);



//! to do listesini yakalamaya calısalım 
const row = document.querySelector(".row");

let value;
// aneden cocuga  erismek
value = todoList;
value = todoList.children; // childları gorduk
value = todoList.children[3];
value = todoList.children[todoList.children.length-1]; // son cocugu yakaladık
value = todoList.children[3].textContent = "Degisti";

// value = Array.from(todoList.children);
// value = forEach(function(todo){
//     console.log(todo.textContent);   // text contentlerini yazdırdım
// })


// ? cocuktan aneye erismek 

value = todo;
value = todo.parentElement.parentElement.parentElement; // ust aneye gidebilmek icin parentelement yazıyoruz(anesinin anesinin anesi gibi)


// ? kardesler arasında gezinmek

value = todo ;
value = todo.nextElementSibling; // bun calıstırınca bi sonraki kardese gecmis olacak


// 

value = row.children[0].children[3].children[0].textContent="Todo Listesi Basligi"; // to do listesine kadar gidiyoruz

console.log(value);
