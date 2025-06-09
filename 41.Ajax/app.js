// ajax kullanımı
// document.getElementById("getirBtn").addEventListener("click", function() {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => response.json())
//     .then(data => {
//       const div = document.getElementById("kullanici");
//       div.innerHTML = `
//         <div class="card">
//           <h2>${data.name}</h2>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <p><strong>Telefon:</strong> ${data.phone}</p>
//           <p><strong>Şirket:</strong> ${data.company.name}</p>
//         </div>
//       `;
//     })
//     .catch(error => {
//       console.error("Bir hata oluştu:", error);
//     });
// });

// setTimeout(function() {
//   callback(name);
// }, 2000);

// // // ornek json 
// // {
// //   "id": 1,
// //   "title": "Merhaba dünya",
// //   "body": "Bu bir yazıdır"
// // }
// // veri.title  // "Merhaba dünya" //? boyle okunur 


// //////////////////////////////////////////////////////////////////
// // Sayfa yüklendikten sonra butona tıklamayı dinliyoruz
// document.getElementById("veriGetir").addEventListener("click", veriGetir);

// // Bu fonksiyon API'den veri alır
// function veriGetir() {
//   // fetch ile API'ye istek gönderiyoruz
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(function(response) {
//       // Gelen cevabı JSON'a çeviriyoruz
//       return response.json();
//     })
//     .then(function(data) {
//       // JSON verisiyle işlem yapıyoruz
//       ekranaYaz(data);
//     })
//     .catch(function(error) {
//       // Hata olursa burası çalışır
//       console.log("Bir hata oluştu:", error);
//     });
// }

// // Bu fonksiyon veriyi ekranda gösterir
// function ekranaYaz(kullanici) {
//   // #sonuc div'ine HTML olarak kullanıcı bilgisi ekleniyor
//   document.getElementById("sonuc").innerHTML = `
//     <h2>${kullanici.name}</h2>
//     <p><strong>Email:</strong> ${kullanici.email}</p>
//     <p><strong>Telefon:</strong> ${kullanici.phone}</p>
//     <p><strong>Şehir:</strong> ${kullanici.address.city}</p>
//   `;
// }


// // xmlrequest ile veri çekme
// // XMLHttpRequest ile veri çekme
// document.getElementById("xmlGetir").addEventListener("click", xmlVeriGetir);
// function xmlVeriGetir() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);
  
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       const kullanici = JSON.parse(xhr.responseText);
//       ekranaYaz(kullanici);
//     } else {
//       console.error("Hata:", xhr.statusText);
//     }
//   };
  
//   xhr.onerror = function() {
//     console.error("Bir hata oluştu.");
//   };
//     // İsteği gönderiyoruz
//   xhr.send();
// }
////////////////////////////////////////////////



// let soz = new Promise(function(resolve, reject) {
//   let not = 85;

//   if (not >= 50) {
//     resolve("Geçtin! Notun: " + not);
//   } else {
//     reject("Kaldın. Notun: " + not);
//   }
// });

// soz
//   .then(function(mesaj) {
//     console.log("BAŞARILI:", mesaj);
//   })
//   .catch(function(hata) {
//     console.log("HATA:", hata);
//   });



function bekle(mesaj) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Mesaj geldi: " + mesaj);
    }, 2000);
  });
}

bekle("Merhaba, bu 2 saniye sonra geldi.")
  .then(function(cevap) {
    console.log(cevap);
  })
  .catch(function(hata) {
    console.log("Hata:", hata);
  });
// Bu kod, 2 saniye bekledikten sonra "Mesaj geldi: Merhaba, bu 2 saniye sonra geldi." mesajını konsola yazdırır.
// Bu şekilde, asenkron işlemleri daha düzenli ve okunabilir bir şekilde yönetebiliriz.

// | Gerçek Hayat                       | Promise                 |
// | ---------------------------------- | ----------------------- |
// | Pizza siparişi verirsin            | `new Promise(...)`      |
// | Pizzacı der ki "30 dk sonra gelir" | `pending`               |
// | Pizza gelirse mutlu olursun        | `resolve()` & `.then()` |
// | Pizza gelmezse kızarsın            | `reject()` & `.catch()` |
