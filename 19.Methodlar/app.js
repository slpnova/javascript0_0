//parametresiz ve geriye deger dondurmeyen metot tanımlamak 
/*
function yazdir(){
kodları yaz 
}
*/

// function yazdir(){
//     debugger;
//     console.log("gul");
// }

// yazdir();
// debugger;
// yazdir();

// function topla(){
//     console.log(5+7);
// }
// topla();


// parametresiz metot tanımlamak

// function yazdir(isim,soyisim){
//      debugger;
//      console.log(isim + " " + soyisim); 
// }
// debugger;
// yazdir("gul","bal");
// yazdir("umut","umud");

//sayinin kubu
// cube(5);
// cube(2);
// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }


// let yas = Number(prompt("yasinizi giriniz"));
// kontrolEt(yas);

// function kontrolEt(yas){
//     if(yas<18){
//         console.log("ehliyeti alabilirsiniz");
//     }else{
//         console.log("ehliyeti alamazsınız");
//     }
// }



/*********************************************************** */
// geriye deger dondurmek

// cube(3);
// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
// } // return kullanarak degeri ayrac icerisinde yazdırmayı da gosterelim


// let donenDeger = cube(3); //bu sekilde cube let icerisinde yazıldı return yuzunden
// console.log(donenDeger);  // dısarı da yazdırmıs olduk

// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
//     return sonuc;
// }
// return; dan sonra yazılan hicbir sey ekrana yazılmaz 