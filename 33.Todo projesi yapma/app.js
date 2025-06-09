// // tum elementleri secme 
// const form = document.querySelector("#todoAddForm");
// const addInput = document.querySelector("#todoName");
// const todoList = document.querySelector(".list-group");
// const firstCardBody = document.querySelectorAll(".card-body")[0];
// const secondCardBody = document.querySelectorAll(".card-body")[1];
// const clearButton = document.querySelector("#clearButton");

// // derleyici yukarıdan asagıya dogru calısır 

// runEvents();

// function runEvents(){
//       form.addEventListener("submit", addTodo);  //htmlde todo ekleyin kısmı burası 
// }

// function addTodo(e){
//     const inputText = addInput.value.trim();

//     if(inputText==null || inputText==""){
//         alert("Lütfen bir todo giriniz");
//     }else{
//         //arayuze ekleme
//         addTodoToUI(inputText); 
//     }

//     //arayuze ekleme
//     // storage ekleme
//     console.log("Submit Eventi calisti");
//     e.preventDefault(); 

// }

// function addTodoToUI(newTodo){
// // <li class="list-group-item d-flex justify-content-between">Todo 1
// //                         <a href="#" class="delete-item">
// //                             <i class="fa fa-remove"></i>
// //                         </a>
// //                     </li>
// const li = document.createElement("li");
// li.className = "list-group-item d-flex justify-content-between";
// li.textContent = newTodo; // yeni girilen degerler burda listelenir

// const a = document.createElement("a");
// a.href = "#";
// a.className = "delete-item";

// const i = document.createElement("i");
// i.className = "fa fa-remove";
// a.appendChild(i);
// li.appendChild(a);
// todoList.appendChild(li);

// addInput.value = ""; //inputu temizleme
// }

//bu derste deger ekleme ve listeleme işlemleri yapıldı.

/*********************************************************************** */

//2.ders: storage todo ekleme 

// const form = document.querySelector("#todoAddForm");
// const addInput = document.querySelector("#todoName");
// const todoList = document.querySelector(".list-group");
// const firstCardBody = document.querySelectorAll(".card-body")[0];
// const secondCardBody = document.querySelectorAll(".card-body")[1];
// const clearButton = document.querySelector("#clearButton");


// let todos = []; // todo listesini tutmak için bir dizi oluşturuyoruz

// // derleyici yukarıdan asagıya dogru calısır 

// runEvents();

// function runEvents(){
//       form.addEventListener("submit", addTodo);  //htmlde todo ekleyin kısmı burası 
// }

// function addTodo(e){
//     const inputText = addInput.value.trim();

//     if(inputText==null || inputText==""){
//         alert("Lütfen bir todo giriniz");
//     }else{
//         //arayuze ekleme
//         addTodoToUI(inputText); 
//         addTodoToStorage(inputText); // storage ekleme
//     }

//     //arayuze ekleme
//     // storage ekleme
//     console.log("Submit Eventi calisti");
//     e.preventDefault(); 

// }

// function addTodoToUI(newTodo){
// // <li class="list-group-item d-flex justify-content-between">Todo 1
// //                         <a href="#" class="delete-item">
// //                             <i class="fa fa-remove"></i>
// //                         </a>
// //                     </li>
// const li = document.createElement("li");
// li.className = "list-group-item d-flex justify-content-between";
// li.textContent = newTodo; // yeni girilen degerler burda listelenir

// const a = document.createElement("a");
// a.href = "#";
// a.className = "delete-item";

// const i = document.createElement("i");
// i.className = "fa fa-remove";
// a.appendChild(i);
// li.appendChild(a);
// todoList.appendChild(li);

// addInput.value = ""; //inputu temizleme
// }



// function addTodoToStorage(newTodo){ 
//     checkTodosFromStorage();
//     todos.push(newTodo); // yeni todo'yu diziye ekliyoruz
//     localStorage.setItem("todos", JSON.stringify(todos)); // diziyi string'e çevirip localStorage'a kaydediyoruz
// }


// function checkTodosFromStorage(){
//     if (localStorage.getItem("todos") === null){
//         todos = [];
//     }else{
//         todos= JSON.parse(localStorage.getItem("todos")); // localStorage'dan todo listesini alıyoruz
//     }
// }

//bu derste storage'a ekleme işlemleri yapıldı.

/*********************************************************************** */

//3.ders: bilgi ekranı olusturma 
// const form = document.querySelector("#todoAddForm");
// const addInput = document.querySelector("#todoName");
// const todoList = document.querySelector(".list-group");
// const firstCardBody = document.querySelectorAll(".card-body")[0];
// const secondCardBody = document.querySelectorAll(".card-body")[1];
// const clearButton = document.querySelector("#clearButton");


// let todos = []; // todo listesini tutmak için bir dizi oluşturuyoruz

// // derleyici yukarıdan asagıya dogru calısır 

// runEvents();

// function runEvents(){
//       form.addEventListener("submit", addTodo);  //htmlde todo ekleyin kısmı burası 
// }

// function addTodo(e){
//     const inputText = addInput.value.trim();

//     if(inputText==null || inputText==""){
//         showAlert("danger", "Lütfen bir todo giriniz");
//     }else{
//         //arayuze ekleme
//         addTodoToUI(inputText); 
//         addTodoToStorage(inputText); // storage ekleme
//         showAlert("success", "Todo başarıyla eklendi!"); // bilgi ekranı ekleme
       
//     }

//     //arayuze ekleme
//     // storage ekleme
//     console.log("Submit Eventi calisti");
//     e.preventDefault(); 

// }

// function addTodoToUI(newTodo){
// // <li class="list-group-item d-flex justify-content-between">Todo 1
// //                         <a href="#" class="delete-item">
// //                             <i class="fa fa-remove"></i>
// //                         </a>
// //                     </li>
// const li = document.createElement("li");
// li.className = "list-group-item d-flex justify-content-between";
// li.textContent = newTodo; // yeni girilen degerler burda listelenir

// const a = document.createElement("a");
// a.href = "#";
// a.className = "delete-item";

// const i = document.createElement("i");
// i.className = "fa fa-remove";
// a.appendChild(i);
// li.appendChild(a);
// todoList.appendChild(li);

// addInput.value = ""; //inputu temizleme
// }



// function addTodoToStorage(newTodo){ 
//     checkTodosFromStorage();
//     todos.push(newTodo); // yeni todo'yu diziye ekliyoruz
//     localStorage.setItem("todos", JSON.stringify(todos)); // diziyi string'e çevirip localStorage'a kaydediyoruz
// }


// function checkTodosFromStorage(){
//     if (localStorage.getItem("todos") === null){
//         todos = [];
//     }else{
//         todos= JSON.parse(localStorage.getItem("todos")); // localStorage'dan todo listesini alıyoruz
//     }
// }

// function showAlert(type, message) {
//     // <div class="alert alert-warning" role="alert">
//     //         this is an alert message!
//     // </div>
//     const div = document.createElement("div");
//     // div.className = "alert alert-"+type; // bunu da kulanabilirsin
//     div.className = `alert alert-${type}`; // bu da kullanılabilir


//     div.textContent = message;
//     firstCardBody.appendChild(div);

//     // Alert mesajını 2 saniye sonra kaldır
//     setTimeout(function() {
//         div.remove();
//     }, 2000);
// }

// bu derste bilgi ekranı ekleme işlemleri yapıldı.
/*********************************************************************** */

// 4.ders storagden alınan degerleri ekrana yazdırmak buna gerek yok basit


//5.ders todo silme 

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");


let todos = []; // todo listesini tutmak için bir dizi oluşturuyoruz

// derleyici yukarıdan asagıya dogru calısır 

runEvents();

function runEvents(){
      form.addEventListener("submit", addTodo);  //htmlde todo ekleyin kısmı burası 
      document.addEventListener("DOMContentLoaded", loadAllTodosToUI); // sayfa yüklendiğinde todo'ları yükle
      secondCardBody.addEventListener("click", removeTodoToUI); // todo silme işlemi
      clearButton.addEventListener("click", allTodosEverywhere); // tüm todo'ları silme işlemi
      filterInput.addEventListener("keyup",filter); //! filtrelemek icin bunu ekledik 
}

function loadAllTodosToUI(){
    checkTodosFromStorage(); // storage'dan todo'ları kontrol et
    todos.forEach(function(todo) {
        addTodoToUI(todo); // her todo'yu arayüze ekle
    });
}

function filter(e){ //!burada filtreleme islemini yapıyoruz
    const filterValue = e.target.value.toLowerCase().trim(); //trim sagdaki soldaki boslukları temizler 
    const todoListesi = document.querySelectorAll(".list-group-item");

    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){ //? aradıgımız kelimenin icinde var mı yok mu diye includes yazıyoruz 
                todo.setAttribute("style","display:flex");
            }else{
                todo.setAttribute("style","display:none");
            }
        });

    }else{
        showAlert("warning","filtreleme yapmak icin en az bir todo olmalıdır!");
    }
}

function allTodosEverywhere(){   //! tum todoları silmek icin yazıldı 
    const todoListesi = document.querySelectorAll(".list-group-item"); // tüm todo'ları seç
    // ekranda silme 
    if (todoListesi.length > 0){
     todoListesi.forEach(function(todo){
        todo.remove(); // arayüzden sil
    });

        // storagedan silme  
        todos = [];
        localStorage.removeItem("todos");
        showAlert("success", "Tüm todo'lar başarıyla silindi!"); // bilgi ekranı ekleme
       }else{
        showAlert("warning", "Silinecek todo bulunamadı!"); // bilgi ekranı ekleme
       }      
} //! buraya kadar todoları silmek icin yazıldı 

function removeTodoToUI(e){ 
    if (e.target.className === "fa fa-remove") {
        // ekrandan silme 
       const todo = e.target.parentElement.parentElement; // silinecek todo'yu bul
       const todoText = todo.firstChild.textContent.trim(); // sadece todo metnini al
       todo.remove(); 

         // storage'dan silme
        removeTodoFromStorage(todoText);

       showAlert("success", "Todo başarıyla silindi!"); // bilgi ekranı ekleme
    }
}

function removeTodoFromStorage(removeTodo){
    checkTodosFromStorage(); // storage'dan todo'ları kontrol et
    todos.forEach(function(todo, index) {
        if (todo === removeTodo) {
            todos.splice(index, 1); // diziden sil
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos)); // storage'ı güncelle
} //buraya kadar storagedan silme dersidir


function addTodo(e){
    const inputText = addInput.value.trim();

    if(inputText==null || inputText==""){
        showAlert("danger", "Lütfen bir todo giriniz");
    }else{
        //arayuze ekleme
        addTodoToUI(inputText); 
        addTodoToStorage(inputText); // storage ekleme
        showAlert("success", "Todo başarıyla eklendi!"); // bilgi ekranı ekleme
       
    }

    //arayuze ekleme
    // storage ekleme
    console.log("Submit Eventi calisti");
    e.preventDefault(); 

}

function addTodoToUI(newTodo){
// <li class="list-group-item d-flex justify-content-between">Todo 1
//                         <a href="#" class="delete-item">
//                             <i class="fa fa-remove"></i>
//                         </a>
//                     </li>
const li = document.createElement("li");
li.className = "list-group-item d-flex justify-content-between";
li.textContent = newTodo; // yeni girilen degerler burda listelenir

const a = document.createElement("a");
a.href = "#";
a.className = "delete-item";

const i = document.createElement("i");
i.className = "fa fa-remove";
a.appendChild(i);
li.appendChild(a);
todoList.appendChild(li);

addInput.value = ""; //inputu temizleme
}



function addTodoToStorage(newTodo){ 
    checkTodosFromStorage();
    todos.push(newTodo); // yeni todo'yu diziye ekliyoruz
    localStorage.setItem("todos", JSON.stringify(todos)); // diziyi string'e çevirip localStorage'a kaydediyoruz
}


function checkTodosFromStorage(){
    if (localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos= JSON.parse(localStorage.getItem("todos")); // localStorage'dan todo listesini alıyoruz
    }
}

function showAlert(type, message) {
    // <div class="alert alert-warning" role="alert">
    //         this is an alert message!
    // </div>
    const div = document.createElement("div");
    // div.className = "alert alert-"+type; // bunu da kulanabilirsin
    div.className = `alert alert-${type}`; // bu da kullanılabilir


    div.textContent = message;
    firstCardBody.appendChild(div);

    // Alert mesajını 2 saniye sonra kaldır
    setTimeout(function() {
        div.remove();
    }, 2000);
}


// 6.ders storageden deger silme ama bunu ustte yapacagım 
// 7.ders tum todo'ları silme guzel bunu da yaptık 
// son ders 8.ders todolar uzerinde filtreleme yapma bunu da usttekine ekliyoruz  