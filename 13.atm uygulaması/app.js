/*
1-bakiye görüntüleme
2-para cekme
3-para yatırma
4-cıkıs
atm uygulaması */

let yeniSatir ="\r\n";
let bakiye = 1000;

let metin = "1-Bakiye Görüntüleme" +yeniSatir
+"2-Para Çekme" +yeniSatir
+"3-Para Yatirma" +yeniSatir
+"4-çikis" +yeniSatir
+"Lütfen bir deger seciniz:";

// alert(metin); 

let secim = prompt(metin);
switch(secim){
    case"1" :
       alert("Bakiyeniz : " +bakiye);
    break;

    case"2" :
       let cekilecekTutar = Number(prompt("cekmek istediginiz tutarı giriniz:"));
       if(cekilecekTutar<bakiye){
        //basarılıdır
        bakiye = bakiye-cekilecekTutar;
        alert("Kalan bakiye:" +bakiye);
       }else{
        alert("Bakiyenizden fazla para cekemezsiniz!" +yeniSatir
            +"Bakiyeniz: "+bakiye + " " +"cekilecekTutar: " +cekilecekTutar);
       }
    break;

    case"3" :
       let yatırılacakTutar = Number(prompt("Yatırılacak tutarı giriniz:"));
       bakiye =bakiye+yatirilacakTutar;
       alert("Güncel bakiyeniz:" +bakiye);
    break;

    case"4" :
       console.log("Sistemden cikis yapilmistir...");
    break;

    default:
    console.log("Lütfen 1-4 arasında bir deger giriniz!");
}
