// selectors -style ozellikleri 
// classname , id , tag name  ---> bir seyi yakalamak icin bunlar kullan
// ! burda edge live serverını actım 

// getElementById : idye gore elementi yakalar 
// getElementByClassName : class ismine gore yakalar 
// getElementByTagName : etiket ismine gore yakalar


const button = document.getElementById("todoAddButton");

console.log(button);
// console.log(button.id); bu ve 
// console.log(button.getAttribute()) bu aynı

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList[3]; //? bana class listesinden 3.yu ver dedim
// const classListesi = button.classListesi[2];

// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })
// console.log(classListesi);


// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// console.log(buttonText);
// console.log(buttonText2);

// button.textContent="<b>Todo Ekleyin</b>"; bunu button olarak kullanmayız html olarak algılamaz 
// button.innerHTML="<b>Todo Ekleyin</b>"; ama bunu algılar ve yazıyı kalınlastırır bu olur 



// ? getElementByClassName ekleyelim ustte 

// const toDoList = Array.from (document.getElementsByClassName("list-group-item")); // hata verdigi icin array from ekledik 
// toDoList.forEach(function(todo){
//     console.log(todo);
// })
// console.log(toDoList);


// ? getElementByTagName ekleyelim uste

// const forms = document.getElementsByTagName("form");
// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[1]);


//li olanları yakalamak icin 
// const toDoList = document.getElementsByTagName("li");
// console.log(toDoList);

// getelementbyıd-getelementbyclassname-getelementbytagname

// querySelector  - querySelectorAll  bunlar bonus bilgi 

// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton); // boyle de secebiliriz 


// const toDoList = document.querySelector(".list-group");
// console.log(toDoList);

// const toDoList = document.querySelector(".list-group-item")[2]; 3.indexsi almak icin boyle yazılır 
// console.log(toDoList); //queryselectorall tum listleri getirir


const toDoList = Array.from(document.querySelectorAll("li:nth-child(even)"));

toDoList.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
})

console.log(toDoList);


