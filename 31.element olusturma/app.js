// dinamik olarak element olusturma 

const cardBodies = document.querySelectorAll(".card-body");
const cardBody = cardBodies[1];
const todoList= document.querySelector(".list-group"); // todo 5 koymak icin 
console.log(cardBody);




const link = document.createElement("a");
link.id = "send";
link.className="btn btn-dark btn-sm mt-3";
link.href="https://medium.com/@slpernova1";
link.target="_blank";
link.textContent= "kisisel website";

/*

<li class="list-group-item d-flex justify-content-between">Todo 4
<a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
</a>
</li>
*/ // ? bunu buraya ornek olsun diye koyduk 


cardBody.appendChild(link); // cocugun sonuna ekle (append)

const todo= document.createElement("li");
const todoLink = document.createElement("a");


//! burdan sonra todo 5 eklemek icin yazıyoruz

todo.className="list-group-item d-flex justify-content-between";  
todo.innerHTML= "Todo 5";
todoLink.href="#";
todoLink.className="delete-item";

const i = document.createElement("i");
i.className="fa fa-remove";

todoLink.appendChild(i);
todo.appendChild(todoLink);
todo.appendChild(todoLink);

todoList.appendChild(todo); // todo 5 eklemek icin

console.log(link);
/*
<li class="list-group-item d-flex justify-content-between">Todo 6
        <a href="#" class="delete-item">
                <i class="fa fa-remove"></i>
        </a>
</li>
*/