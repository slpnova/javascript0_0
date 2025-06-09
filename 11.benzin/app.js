// Benzin istasyonu 

/*
1-dizel 32
2-benzin 30
3-lpg 15

gelen musterilerin alacagi bilgiler ;
1-yakıt tipi 
2-yuklenecek yakıt litresi
*/

let Dizel = 32  ,  Benzin = 30  ,  LPG = 15;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel" +yeniSatir
+"2-Benzin" +yeniSatir
+"3-LPG" +yeniSatir
+"Yakit türünüzü seciniz";

let yakitTipi = prompt(yakitMetni);
let yakitLitresi = Number(prompt("Yakit litresini giriniz"));
let bakiye = Number(prompt("Bakiyenizi giriniz"));
if(yakitTipi=="1"){
    let odenecekTutar = Dizel * yakitLitresi;
    if(odenecekTutar<bakiye){
       bakiye = bakiye-odenecekTutar;
       alert("Yakit alma islemi basarili" +yeniSatir
       +"Kalan bakiye :" + bakiye);
    }else{
       alert("Bakiyeniz yeterli değildir"  + yeniSatir
       +"Odenecek tutar : " + odenecekTutar + yeniSatir
       +"Bakiye :" + bakiye + yeniSatir
       +"Eksik tutar :" + (odenecekTutar - bakiye));
    }
}else if (yakitTipi == "2") {
    let odenecekTutar = Benzin * yakitLitresi;
    if (odenecekTutar < bakiye) {
        bakiye = bakiye - odenecekTutar;
        alert("Yakit alma islemi basarili" + yeniSatir
        + "Kalan bakiye :" + bakiye);
    } else {
        alert("Bakiyeniz yeterli değildir" + yeniSatir
        + "Odenecek tutar : " + odenecekTutar + yeniSatir
        + "Bakiye :" + bakiye + yeniSatir
        + "Eksik tutar :" + (odenecekTutar - bakiye));
    }
} else if (yakitTipi == "3") {
    let odenecekTutar = LPG * yakitLitresi;
    if (odenecekTutar < bakiye) {
        bakiye = bakiye - odenecekTutar;
        alert("Yakit alma islemi basarili" + yeniSatir
        + "Kalan bakiye :" + bakiye);
    } else {
        alert("Bakiyeniz yeterli değildir" + yeniSatir
        + "Odenecek tutar : " + odenecekTutar + yeniSatir
        + "Bakiye :" + bakiye + yeniSatir
        + "Eksik tutar :" + (odenecekTutar - bakiye));
    }
}else{
    alert("Lütfen bir yakit tipi seciniz!");
}