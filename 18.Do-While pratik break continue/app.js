//1den 10a kadar yazdıralım

// let sayac = 1;
// do {
//     console.log(sayac);
//     sayac++;   
// }while (sayac<=10);


// while calısmasa bile do calısır bir kere
// let yas = 23;
// do{
//     console.log("ehliyetinizi alabilirsiniz");
// }while(yas>=25);



//1den 20ye kadar olan tek sayıların toplamı 
// let sayac=1;
// let toplam=0;
// do {
//     if(sayac%2==1){
//         toplam+=sayac;
//     }
//     sayac++;
// } while (sayac<=20);
// console.log("Toplam:",toplam);


//Break-Continue
//1den 10a kadar sayıları yazdır sonra 8e gelince donguden cık

// let sayac=1;
// while(sayac<=10){
//     console.log(sayac);
//     if(sayac==8){
//         break;
//     }
//     sayac++;
// }

// ? continue
// 1 2 3 4 5 6 7 9 10
let sayac=0;

//break te 8den sonrası yazılmaz ama continue 8i yazmaz ve devam eder fark budur
// while(sayac<=10){
//     sayac++;
//     if(sayac>10){
//         break;
//     }
//     if(sayac==8){
//         continue;
//     }
//     console.log(sayac);
// }
