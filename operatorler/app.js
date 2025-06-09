// aritmetik operatörler

/* --- = atama operatorleri onemli !

+ - * / % 
++ --  artirma azaltma operatorleri
** 
*/

// let not1 =60;
// let not2 = 70;

// console.log(not1 + not2); // toplama işlemi (dogru)

// let sayi1 = "10";
// let sayi2 = 2;
// console.log(sayi1 + sayi2); // iki string toplanmazyan yana getirir 102 olur (end)


// let no1= 100;
// let no2= 50;
// / bolme işlemi
// let sonuc = (no1 + no2) / 2; // ortalama
// console.log(sonuc); // 75


/* 
% : mod dalma islemi 
10/3 = 1
12/5 = 2
console.log(10 % 3); // 1
console.log(12 % 5); // 2
*/


// let a = 22;
// a++;
// console.log(a); // 23
// a--;
// console.log(a); // 21

// ussu alma
//  ** : 2^3 = 8
//  console.log(2 ** 3); // 8

/************************************************************************************************* */

// atama operatorleri 

/*
=
==
===
+=
*=
/=
%=
**=
*/ 

// == : esittir 
// console.log(5==5); // true
// console.log(5==4); // false

// console.log(3=="3"); // true  string dahi olsa esittir 


// ===: hem tipleri hem de degerin esit olup olmadıgına bakar 
// console.log(3==="3"); // false  // string ve number tipleri esit degil


/*
+= : atama operatoru
let sayi1 = 5;
sayi+ =2; // aynı demektir 
sayi = sayi+2;    //  kodlar sagdan okunur 
console.log(sayi); // 7

/* 
-= : atama operatoru    
let a =4;
sayi = sayi1-3;
/ console.log(sayi);  1
*/

/*
*= : atama operatoru
let a = 5;
sayi = sayi1*4;
/ console.log(sayi); // 20
*/

/*
/= : atama operatoru
let a = 20;
sayi = sayi1/4;
/ console.log(sayi); // 5
*/

/*
%= : mod alma operatoru
let a = 10;
sayi = sayi1%3;
/ console.log(sayi); // 3
*/

/*
**= : atama operatoru
let a = 2;
sayi = sayi1**4;
/ console.log(sayi); // 16
*/

/************************************************************************************************* */

/* mantıksal operatorler 

&& : ve
|| : veya
! : degil
*/  
// yasınız 18'den buyukse Ve 3k para olması 
// let yas = 20; 
// let para = 3000;

// if(yas>18 && 3000){
//     console.log("18'den buyuk ve 3k para var");
// }else{
//     console.log("18'den buyuk degil veya 3k para yok");
// }

// gul temmuza ayına girdiyse 20 yasındadır
// let gul = temmuz;
// let temmuz = 20;
// if(gul == "temmuz" && yas == 20){
//     console.log("gul temmuza ayına girdi ve 20 yasındadır");
// }else{
//     console.log("gul temmuza ayına girmedi veya 20 yasinda degildir");
// }

// umut 20 yasındadır veya degildir
// let umut = 20;
// if(umut == 20 || yas == 20){
//     console.log("umut 20 yasindadir");
// }else{
//     console.log("umut 20 yasinda degildir");
// }

// ! : degil
// let a = 5;
// let b = 10;
// if(a != b){
//     console.log("a b ye esit degil");
// }else{
//     console.log("a b ye esit");
// }

// gul 20 yasında veya saglıklıdır 
// let gul = 20;
// let saglikli = true;
// if(gul == 20 || saglikli == true){
//   console.log("gul 20 yasindadir veya sagliklidir");
// }else{
//   console.log("gul 20 yasinda degildir veya saglikli degildir");
// }



/*  karsılastırma operatorleri 
    > : buyuk
    < : kucuk
    >= : buyuk esit
    <= : kucuk esit
    == : esit
    === : tip ve deger esitligi
    != : esit degil
    !== : tip ve deger esit degil
    ? : ternary operator
    : : ternary operator
*/

// let a = 5;
// let b = 10;
// if(a > b){
//     console.log("a b den buyuk");
// }else{
//     console.log("a b den kucuk");
// }

// let a = 5;
// let b = 10;
// if(a < b){
//     console.log("a b den kucuk");
// }else{
//     console.log("a b den buyuk");
// }

// let a = 5;
// let b = 10;
// if(a >= b){
//     console.log("a b den buyuk esit");
// }else{
//     console.log("a b den kucuk esit");
// }

// let a = 5;
// let b = 10;
// if(a <= b){
//     console.log("a b den kucuk esit");
// }else{
//     console.log("a b den buyuk esit");
// }

// let a = 5;
// let b = 10;
// if(a == b){
//     console.log("a b ye esit");
// }else{
//     console.log("a b ye esit degil");
// }

// let a = 5;
// let b = 10;
// if(a === b){
//     console.log("a b ye esit");
// }else{
//     console.log("a b ye esit degil");
// }

// let a = 5;
// let b = 10;
// if(a != b){
//     console.log("a b ye esit degil");
// }else{
//     console.log("a b ye esit");
// }

// let a = 5;
// let b = 10;
// if(a !== b){
//     console.log("a b ye esit degil");
// }else{
//     console.log("a b ye esit");
// }

// let a = 5;
// let b = 10;
// (a == b) ? console.log("a b ye esit") : console.log("a b ye esit degil");





