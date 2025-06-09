// function yazdir (){
//     console.log("Merhaba Dünya");
// }
// yazdir();  // ecmascripten once boyle yazılıyordu 


// arrow function ile yazma
// const yazdir = () => {
//     console.log("Merhaba Dünya");
// }
// yazdir();   


// parametreli yazdırma 
// const yazdir = (FistName) => {
//     console.log("Merhaba " , FirstName);
// }
// yazdir("Gül");  // Merhaba Gül


// const yazdir = (firstName) => {
//     console.log("Merhaba " + firstName);
//     console.log("Hoşça kal " + firstName + ".");
// }

// yazdir("Gül");


// const kupAl = x => {     //? burada tek parametre olduğu için parantez kullanmaya gerek yok
//     return x * x * x;    //? burada return ifadesini de silebiliriz cunku tek bir islem yapiyor 
// }                        //? kıvırcık parantezleri de silebiliriz tek bir islem yapiyoruz 
// console.log("Deger" , kupAl(3));  // 27



//! Descruction kullanımı 
// let langs = ["Python", "JavaScript", "C++", "Java"];
// let lang1, lang2, lang3, lang4

//  lang1 = langs[0]; //eskiden boyle yapılıyordu ama simdi ecma scriptle asagıdaki gibi 
//  lang2 = langs[1];
//  lang3 = langs[2];
//  lang4 = langs[3];

// [lang1, lang2, lang3, lang4] = langs; //? destructuring kullanımı ile daha kısa ve okunabilir hale geldi


// console.log (lang1, lang2, lang3, lang4); // Python JavaScript C++ Java


// const hesapla = (a,b) => {
//     const toplam = a+b
//     const fark = a-b
//     const carpim = a*b
//     const bolum = a/b

//     const dizi = [toplam,fark,carpim,bolum];
//     return dizi; //? burada dizi olarak geri döndürüyoruz
// }
// let [a,b,c,d] = hesapla(10,2)

// console.log(a,b,c,d); // 12 8 20 5



// const person = {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 20,
// }
//  let isim , soyisim , yas 

//  isim = person.firstName
//  soyisim = person.lastName
//  yas = person.age

// let {firstName, lastName, age} = person; //? destructuring kullanımı ile daha kısa ve okunabilir hale geldi
// console.log(firstName, lastName, age); // Jane Doe 20



//! Spread operator kullanımı


// let numbers = [10,20,30,40]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }


// eski yontem
// add(numbers[0], numbers[1], numbers[2], numbers[3]); // 100

// add(...numbers); //? spread operator kullanımı ile 
// console.log(...numbers); // 10 20 30 40


// const diller1 = ["Python", "JavaScript"];
// const diller2 = ["C++", "Java"];
// const diller3 = ["Ruby", "PHP"];

// const tumDiller = [...diller1, ...diller2, ...diller3]; //? spread operator kullanımı ile birleştirme
// console.log(tumDiller); // Python JavaScript C++ Java Ruby PHP


/*
const numbers = [1,2,3,4,5,6,7,8,9]

let [a,b, ...kalanSayilar]= numbers 
console.log(a,b,kalanSayilar)  //? bu da farkli bir kullanımdır 
*/


// const array1 = ["Nova","ryou","arsenik"]

// const array2 = [...array1] // yeni yontem 

// console.log(array2) // ["Nova", "ryou", "arsenik"]



//! For in - For of donguleri 

let names = ["Nova","ryou","arsenik","Gül","umud","ruya"];
// names.forEach(function(name){ //? eskiden forEach kullanarak yapıyorduk
//     console.log(name);
// })
// names.forEach(name => console.log(name)); //yeni ogrendigimiz arrow function ı burada boyle kullanabilirz

//? For in 
// for(let name in names){ // donerken indexi de verir
//     console.log(name , names[name])  // names[name] index numaralarını da gormek icin kullanılır 
// }

//? For of 
// for (let isim of names){ // degeri verir indexi vermez
//     console.log(isim , names.indexOf(isim)) // index numaralarını vermesi icin indexof yazdık 
// }


