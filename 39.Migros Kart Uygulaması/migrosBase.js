class MigrosBase {

    indirimOrani = 20;
    /*
    urunler[
    fiyat :10,
    urunAdi:"süt"
    
    ]
   */
    constructor(isim, soyisim, kartVarMi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarMi = kartVarMi;
        this.urunler = urunler;
    }

    hesapla(){


        let odenecekTutar = 0;
       if(this.urunleriKontrolEt(this.urunler)){
              //sepet dolu 
              if(this.kartVarMi){
                //money kartı vardır
                this.urunler.forEach((urun) => {
                    // money kartı vardır, indirimli fiyatı uygula
                    urun.fiyat = urun.fiyat - (urun.fiyat * this.indirimOrani / 100);
                    odenecekTutar += urun.fiyat;
                });
              } else {
                // money kartı yoktur
                alert("Money Kartınız yok. İndirim uygulanmayacaktır.");
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                });
              }
        } else {
            alert("Sepetinizde ürün bulunmamaktadır.");
        }
        return odenecekTutar;
    }
    urunleriKontrolEt(urunler) {
        if(urunler!=null && urunler.length > 0) {
            return true;
        }
        return false;
    }
}