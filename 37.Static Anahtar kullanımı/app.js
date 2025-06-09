// static konusu 
// kullanıcı sınıfı ornegi 

// Static anahtar kelimesi, sınıfın kendisine ait olan metotları ve özellikleri tanımlamak için kullanılır.
// static metotlar oran , toplama , ortalama tarih biçimleme, karşılaştırma gibi islemler icin kullanılır 


class Kullanici {
  constructor(ad, yas) {
    this.ad = ad;
    this.yas = yas;
  }

  // Normal örnek metodu
  bilgileriGoster() {
    console.log(`${this.ad} - ${this.yas} yaşında`);
  }

  // Static metot
  static sistemMesaji() {
    console.log("Tüm kullanıcılar sisteme hoş geldi!");
  }

  // Static yardımcı metot
  static yasKarsilastir(k1, k2) {
    if (k1.yas > k2.yas) {
      return `${k1.ad} daha büyük.`;
    } else if (k1.yas < k2.yas) {
      return `${k2.ad} daha büyük.`;
    } else {
      return "İkisi de aynı yaşta.";
    }
  }
}

// Nesneler oluşturuluyor
const ali = new Kullanici("Ali", 25);
const ayse = new Kullanici("Ayşe", 30);

// Normal metot çağrısı (nesne üzerinden)
ali.bilgileriGoster();   // Ali - 25 yaşında

// Static metot çağrısı (sınıf üzerinden)
Kullanici.sistemMesaji();  // Tüm kullanıcılar sisteme hoş geldi!

// Static metot ile karşılaştırma
console.log(Kullanici.yasKarsilastir(ali, ayse)); // Ayşe daha büyük.


//! Matematik sınıfı örneği
class Matematik {
  static topla(a, b) {
    return a + b;
  }

  static cikar(a, b) {
    return a - b;
  }
}

console.log(Matematik.topla(10, 5)); // 15
console.log(Matematik.cikar(10, 5)); // 5


//! Tarih sınıfı örneği
class Tarih {
  static bugun() {
    return new Date().toLocaleDateString();
  }

  static tarihFormatla(tarih) {
    return tarih.toLocaleDateString();
  }
}
console.log(Tarih.bugun()); // Bugünün tarihi


//!Utility Functions
class Hesaplayici {
  static topla(a, b) {
    return a + b;
  }

  static ortalama(liste) {
    return liste.reduce((a, b) => a + b, 0) / liste.length;
  }
}

console.log(Hesaplayici.topla(5, 7));           // 12
console.log(Hesaplayici.ortalama([10, 20, 30])); // 20

//!Veri Karşılaştırma ve Sıralama
class Ogrenci {
  constructor(ad, not) {
    this.ad = ad;
    this.not = not;
  }

  static notKarsilastir(a, b) {
    return b.not - a.not; // Büyükten küçüğe
  }
}

const ogrenciler = [
  new Ogrenci("Ali", 85),
  new Ogrenci("Ayşe", 92),
  new Ogrenci("Mehmet", 78)
];

ogrenciler.sort(Ogrenci.notKarsilastir);
console.log(ogrenciler);
// [ Ogrenci { ad: 'Ayşe', not: 92 }, Ogrenci { ad: 'Ali', not: 85 }, Ogrenci { ad: 'Mehmet', not: 78 } ]





