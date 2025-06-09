
let mesaj = 
`
Migros'a Hoş Geldiniz!
Money Kartınız Var mı ?
1-Evet 
2- Hayır 
`;

const urunler = [
    {
        urunIsmi : "Süt",
        fiyat : 15
    },
    {
        urunIsmi : "Ekmek",
        fiyat : 10
    },
    {
        urunIsmi : "Yumurta",
        fiyat : 20
    }
]

//true veya false
let sonuc = confirm (mesaj);
let odenecekTutar;

if(sonuc){
    //money kartı var
    let isim = prompt("Lütfen isminizi giriniz:");
    let soyisim = prompt("Lütfen soyisminizi giriniz:");
    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(
        `Musteri Bilgileri:
        İsim: ${musteri.isim}
        Soyisim: ${musteri.soyisim}
        Ödenecek Tutar: ${odenecekTutar} TL
        `);
}else{
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Odenecek tutar: ${odenecekTutar} TL`)

}