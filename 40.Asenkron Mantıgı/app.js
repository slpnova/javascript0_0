/* 
js senkron calısan bir dildir
nerelerde calısır/asenkron calıstıranlar?
-timing
-event(olay)
-http isteklerinde
*/

/*_______callback-promise-async-await_______
(asenkron yapıları senkrona cevirip yonetiriz) */

// selamVer();   // yukarıdan asagı dogru okumaya baslar
// console.log("1. satır");
// console.log("2. satır");

// function selamVer() {
//     console.log("Selam");
// }

/////////////// asenkron timing

// console.log("Hoş geldiniz");
// setTimeout(() => {
//     console.log("Süreli mesaj");
// }, 2000); // 2 saniye sonra çalışır

// console.log("Güle güle");
// setTimeout, asenkron bir fonksiyondur.


///////////////// asenkron event 
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     console.log("Butona tıklandı");
// });  // bu kod bize sunu soyler Tıklanma gerçekleştiğinde arka planda belirlediğim fonksiyonu çağır.


// eger bir yılan oyunu yapsaydım bunu soyle kullanırdım 
// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowUp") {
//     console.log("Yukarı git!");
//     yilanYonu = "yukari";
//   }
// });



///////// asenkron http istekleri
// const url = "https://jsonplaceholder.typicode.com/posts/1";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Hata:", error));
//? bu kod bize sunları soyler 
/*
GET isteği gönderir,
cevap gelince .then() ile işlemi yürütür,
hata olursa .catch() ile yakalar */

//? bu konu onemlidir cunku veri kaydetmede form gondermede onemlidir 


// ornek kullanıcı kaydetme 
// async function kullaniciEkle() {
//   const yeniKullanici = {
//     isim: "Ali",
//     email: "ali@example.com"
//   };

//   const yanit = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(yeniKullanici)
//   });

//   const sonuc = await yanit.json();
//   console.log("Sunucudan gelen cevap:", sonuc);
// }


//? 
/*
GET	    Veri alma
POST    Veri gönderme
PUT	    Veriyi tamamen güncelleme
PATCH   Veriyi kısmen güncelleme
DELETE	Veri silme
*/




////////////// callback
// function getName(callback){
//   setTimeout(() => {
//     let name = "Enes"; // web servisten geldi.
//     callback(name);    // veriyi dışarıya gönderiyoruz (callback ile)
//   }, 1000);
// }
// // callback fonksiyonunu çağırıyoruz
// /////////////////////////
// function getSurname(name){
//   setTimeout(() => {
//     let surname = "Bayram"; // web servisten geldi
//     console.log(name, surname);
//   }, 500);
// }
// // callback fonksiyonunu çağırıyoruz

// /////////////////////////////////

// // get name baska bir isleme veri vermek icin (callback sayesinde)
// getName((name) => {
//   getSurname(name);
// });
// // getsurname sonucu direkt console.log() ile yazmak icin
// getSurname("Enes");


// callback benzetmesi 
// Senin annen yemek yaparken sana diyor ki:
// "Ben yemeği yapınca seni çağıracağım."
// Burada annen yemek yapıyor (asenkron iş), senin çağrılman ise bir callback fonksiyonu!

// callback ile yılan oyunu ornegi
// function skorKaydet(skor, callback) {
//   setTimeout(() => {
//     console.log("Skor kaydedildi:", skor);
//     callback(); // Skor kaydedildikten sonra ne yapalım?
//   }, 1000);
// }

// skorKaydet(100, () => {
//   console.log("Skor ekranına yönlendiriliyor...");
// });

// await function kullanımı
// async function kullaniciEkle() {
//   const yeniKullanici = {
//     isim: "Ali",
//     email: "ali@example.com"
//   };

//   const yanit = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(yeniKullanici)
//   });

//   const sonuc = await yanit.json();
//   console.log("Sunucudan gelen cevap:", sonuc);
// }

// kullaniciEkle();
// //? async-await ile kod daha okunabilir ve yönetilebilir hale gelir.
// //? async-await, asenkron işlemleri senkron gibi yazmamızı sağlar.
// //? await, sadece async fonksiyon içinde kullanılabilir.
// //? async fonksiyonlar, her zaman bir Promise döner.
// //? await, Promise'in çözülmesini bekler ve sonucu döner.
// //? async-await, callback hell'i önler ve kodu daha temiz hale getirir.

// // promise ile asenkron işlemler
// const getName = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let name = "Enes"; // web servisten geldi.
//             resolve(name);    // veriyi dışarıya gönderiyoruz (resolve ile)
//         }, 1000);
//     });
// };
