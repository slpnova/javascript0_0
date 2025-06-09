// Basit bir kalitim ornegi (coksevdimbukonuyu)
class Hayvan {
  constructor(ad) {
    this.ad = ad;
  }

  sesCikar() {
    console.log(`${this.ad} bir ses çıkardı.`);
  }
}

class Kopek extends Hayvan {
  havla() {
    console.log(`${this.ad} havladı.`);
  }
}

const karabas = new Kopek("Karabaş");
karabas.sesCikar(); // Karabaş bir ses çıkardı.
karabas.havla();    // Karabaş havladı.


/*
class Kedi extends Hayvan {
    miyavla() {
        console.log(`${this.ad} miyavladı.`);
    }
}

const miyav = new Kedi("Miyav");
miyav.sesCikar(); // Miyav bir ses çıkardı.
miyav.miyavla();  // Miyav miyavladı.

////////////////////////////

class Kelebek extends Hayvan {
    ucar() {
        console.log(`${this.ad} uçtu.`);
    }
}

const kelebek = new Kelebek("Kelebek");
kelebek.sesCikar(); // Kelebek bir ses çıkardı.
kelebek.ucar();     // Kelebek uçtu.
*/


//?bazı kalitim ornekleri 
// Kullanıcı → Admin → SuperAdmin Örneği
class Kullanici {
  constructor(ad) {
    this.ad = ad;
  }

  giris() {
    console.log(`${this.ad} giriş yaptı.`);
  }
}

class Admin extends Kullanici {
  paneliAc() {
    console.log(`${this.ad} admin panelini açtı.`);
  }
}

class SuperAdmin extends Admin {
  tumKullanicilariSil() {
    console.log(`${this.ad} tüm kullanıcıları sildi!`);
  }
}

const superAdmin = new SuperAdmin("Zeynep");
superAdmin.giris();              // Zeynep giriş yaptı.
superAdmin.paneliAc();          // Zeynep admin panelini açtı.
superAdmin.tumKullanicilariSil(); // Zeynep tüm kullanıcıları sildi!

//////////////////////////////////////////////////////////////////
// Ürün → Kitap → DijitalKitap Örneği
class Urun {
  constructor(ad, fiyat) {
    this.ad = ad;
    this.fiyat = fiyat;
  }

  bilgi() {
    console.log(`${this.ad} - ${this.fiyat}₺`);
  }
}

class Kitap extends Urun {
  constructor(ad, fiyat, yazar) {
    super(ad, fiyat);
    this.yazar = yazar;
  }

  kitapBilgi() {
    console.log(`${this.ad} - ${this.yazar}`);
  }
}

class DijitalKitap extends Kitap {
  constructor(ad, fiyat, yazar, dosyaBoyutu) {
    super(ad, fiyat, yazar);
    this.dosyaBoyutu = dosyaBoyutu;
  }

  indirmeBilgisi() {
    console.log(`${this.ad} (${this.dosyaBoyutu}MB) indirilebilir.`);
  }
}

const kitap = new DijitalKitap("Modern JS", 40, "Can Yılmaz", 5);
kitap.bilgi();           // Modern JS - 40₺
kitap.kitapBilgi();      // Modern JS - Can Yılmaz
kitap.indirmeBilgisi();  // Modern JS (5MB) indirilebilir.




//! sunu unutma 
class A { }           // Üst sınıf (parent/super/base)
class B extends A { } // Alt sınıf (child/subclass)
super();              // Üst sınıfın constructor'ını çağırmak için


//! super() kullanımı  super kelimesi "üst sınıfa (parent class) erişmek için kullanılır. İki farkli yolu vardır 

// 1.Üst sınıfın constructor’ını çağırır
/*
class Hayvan {
  constructor(ad) {
    this.ad = ad;
  }
}

class Kedi extends Hayvan {
  constructor(ad, cins) {
    super(ad); // Hayvan'daki constructor'ı çağırır
    this.cins = cins;
  }

  bilgi() {
    console.log(`${this.ad} bir ${this.cins} cinsi kedi.`);
  }
}

const pamuk = new Kedi("Pamuk", "Van");
pamuk.bilgi(); // Pamuk bir Van cinsi kedi.
*/
////////////////////////////////////////////////////////

// 2.Üst sınıfın metotlarını çağırır
class Hayvan {
  constructor(ad) {
    this.ad = ad;
  }
}

class Kedi extends Hayvan {
  constructor(ad, cins) {
    super(ad); // Hayvan'daki constructor'ı çağırır
    this.cins = cins;
  }

  bilgi() {
    console.log(`${this.ad} bir ${this.cins} cinsi kedi.`);
  }
}

const pamuk = new Kedi("Pamuk", "Van");
pamuk.bilgi(); // Pamuk bir Van cinsi kedi.
// Kedi sınıfı, Hayvan sınıfının özelliklerini ve metotlarını kullanabilir

// | Anahtar Kelime  | Ne İşe Yarar?                     | Nerede Kullanılır?                       |
// | --------------- | --------------------------------- | ---------------------------------------- |
// | `this`          | Mevcut nesneye erişim sağlar      | Sınıf içindeki metot ve constructorlarda |
// | `super()`       | Üst sınıf constructor’ını çağırır | Alt sınıf constructor’ında               |
// | `super.metot()` | Üst sınıf metodunu çağırır        | Alt sınıf içinde metotlarda              |
