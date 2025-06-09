// push       ;              dizinin sonuna eleman ekler, array'e dizinin uzunluğunu söyler
// unshift    ;              dizinin başına eleman ekler, eleman sayısını geriye döner

// pop        ;              dizinin sonundan eleman siler, eleman sayısını döner
// shift      ;              dizinin başından eleman siler, eleman sayısını döner

// splice(denced, index) ;   eleman eklemek ve silmek için kullanılır.
// toString() ;              diziyi string'e çevirir. Farklı ise array'e çevirebilirsiniz.
// join   ;                  dizisiyi stringe cevirir. farkı ise araya eleman ekleyebiliriz

// concat()   ;              birleştirir, birden fazla ile kullanılır
// slice(dencedlenmek) ;     diziyi istenilen yerden bölüp yeni bir dizi oluşturur

// length   ;                  dizinin uzununu verir, çevrim içi göstermek
// reverse  ;                diziyi ters çevirir, sıfırdan başlayıp birden sona kadar

// split    ;                belirli bir ifadeye gore bolup diziyi cevirmek
// includes;                 verilerin dizinde olup olmadığını kontrol eder

//indexof   ;                elemanın index numarasını verir


let arabalar = ["bmw","toyota","reanult","mercedes","porsche"];
// let arabalar2 = ["hyundai","tofaş"]
// console.log(arabalar.length); //push example
// arabalar.push("opel");
// console.log(arabalar);

// arabalar.unshift("hyundai");
// console.log(arabalar); //unshift method

// let silinenEleman =arabalar.pop("porsche"); //pop method
// console.log(arabalar);
// console.log(silinenEleman);


// arabalar.shift(); //shift method
// console.log(arabalar);
// silinen elemanı gostermesi icin soyle yazabilirsin 
// let silinenEleman = arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);

// console.log(arabalar); //splice method
// arabalar.splice(0,0,"hyundai"); // 0,0 su anlama gelir dizinin basından ve diziden hicbir eleman silme ama "hyundai" ekle
// console.log(arabalar);

// arabalar.toString();
// console.log(typeof arabalar); // toString methodu buraya tekrar bak
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);

// let stringArabalar = arabalar.join("-"); //join methodu
// console.log(stringArabalar); //araya - koydu kullanıslı

// burda arabalar2 ekleyin
// let birlesmisDizi = arabalar1.concat(arabalar2); // concat method
// console.log(birlesmisDizi);

// arabalar2 dizisini kaldıralım burda
// console.log(arabalar); // slice method
// let ayriDizi = arabalar.slice(2); //2den basla ve ayrı dizi yap dedik
// console.log(ayriDizi);

// console.log(arabalar.length); // length bir ozelliktir

// console.log(arabalar); // reverse methodu 
// let tersArabalar = arabalar.reverse();
// console.log(arabalar);

// let isimler = "gul,umud,ruya"; // split methodu 
// let isimlerDizi = isimler.split(",");
// console.log(typeof isimlerDizi);

//index of methodu
// let index = arabalar.indexOf("bmw"); // bmw var mı diye soruyoz
// console.log(index);

//includes method
// let sonuc = arabalar.includes("porsche"); // boyle bir eleman var mı diye gosterilir true ya da false olarak dpner
// console.log(sonuc);
