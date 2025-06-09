// // Constructor (Yapıcı) Fonksiyon
// function Araba(marka, model, yil) {
//   this.marka = marka;
//   this.model = model;
//   this.yil = yil;

//   this.bilgileriGoster = function () {
//     console.log(`${this.marka} ${this.model} - ${this.yil}`);
//   };
// }

// // Nesne oluşturma
// let araba1 = new Araba("Toyota", "Corolla", 2020);
// let araba2 = new Araba("Honda", "Civic", 2022);

// // Fonksiyonu çağırma
// araba1.bilgileriGoster();  // Toyota Corolla - 2020
// araba2.bilgileriGoster();  // Honda Civic




// yeni modern hali es6 il e
class Araba {
  constructor(marka, model, yil) {
    this.marka = marka;
    this.model = model;
    this.yil = yil;
  }

  bilgileriGoster() {
    console.log(`${this.marka} ${this.model} - ${this.yil}`);
  }
}

const araba1 = new Araba("BMW", "320i", 2023);
const araba2 = new Araba("Mercedes", "C200", 2021);

araba1.bilgileriGoster();  // BMW 320i - 2023
araba2.bilgileriGoster();  // Mercedes C200 - 2021
