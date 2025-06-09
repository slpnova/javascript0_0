let urun1 ={
    isim : "Bocchi the Rock!, Vol. 1",
    kategori : "manga",
    fiyat : "880",
}
let urun2 ={
    isim : "Bocchi the Rock!, Vol. 2",
    kategori : "manga",
    fiyat : "850",
}
let urun3 ={
    isim : "Bocchi the Rock!, Vol. 3",
    kategori : "manga",
    fiyat : "936",
}
let urun4 ={
    isim : "HUAWEI FreeBuds 6 ",
    kategori : "teknoloji",
    fiyat : "7000",
}
let urun5 ={
    isim : "Hosa HDS-100 Kulaklık",
    kategori : "teknoloji",
    fiyat : "895",
}
let urun6 ={
    isim : "Sennheiser HD 800 S Hi Fi Kulaklık",
    kategori : "teknoloji",
    fiyat : "88500",
}

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir urun ismi giriniz");

filtreliUrunleriGetir(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriGetir(urunler){
    urunler.forEach(function(urun){
       if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){ 
        filtreliUrunler.push(urun);
        }
     });
}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function(urun) {
        console.log("----------------------------------");
        console.log("| " + urun.isim + " | " + urun.fiyat + " | " + urun.kategori + " |");
        console.log("----------------------------------");
    });
} 