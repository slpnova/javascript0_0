// style kullanımı 
const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");

const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton);
// console.log(todo);

todo.style.color = "white";
todo.style.backgroundColor = "gray";
todo.style.fontWeight = "bold"; 
todo.style.paddingTop = "20px";
todo.style.paddingLeft = "70px";

todoList.style.marginTop="60px";
// todoList.style.marginLeft="100px";

clearButton.style.backgroundColor="red";
clearButton.style.fontWeight = "bold";
clearButton.style.paddingTopTop = "10px";
clearButton.style.borderRadius = "50px";

