// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => response.json())
//   .then(post => {
//     console.log("Başlık:", post.title);
//     console.log("İçerik:", post.body);
//   })
//   .catch(hata => {
//     console.error("Veri alınamadı:", hata);
//   });
//////////////////////////////////////////////////////
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST", // Gönderim türü
//   headers: {
//     "Content-type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Yeni Yazı",
//     body: "Bu yazı fetch ile eklendi.",
//     userId: 1
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log("Sunucudan dönen:", data))
//   .catch(error => console.error("Hata:", error));

// Bu kod, JSONPlaceholder API'sine yeni bir yazı ekler ve sunucudan dönen yanıtı konsola yazdırır.
// JSONPlaceholder, sahte verilerle test yapmamızı sağlayan bir API'dir.

///////////////////////////////////////////////
// ✅ fetch(url) → Sunucuya istek atar
// ✅ then() → Cevap geldiğinde çalışır
// ✅ response.json() → JSON formatına çevirir
// ✅ catch() → Hata varsa yakalar
// ✅ fetch POST → Veri gönderme işlemi


// async await kullanımı
document.getElementById("getir").addEventListener("click", kullaniciGetir);

async function kullaniciGetir() {
  const sonuc = document.getElementById("sonuc");

  try {
    const yanit = await fetch("https://jsonplaceholder.typicode.com/users/3");
    const kullanici = await yanit.json();

    sonuc.textContent = `
Ad: ${kullanici.name}
Email: ${kullanici.email}
Şehir: ${kullanici.address.city}
Şirket: ${kullanici.company.name}
    `;
  } catch (hata) {
    sonuc.textContent = "Bir hata oluştu: " + hata;
  }
}
// Bu kod, bir kullanıcıyı JSONPlaceholder API'sinden asenkron olarak getirir ve bilgilerini ekranda gösterir.
// Eğer hata oluşursa, hata mesajını ekranda gösterir.