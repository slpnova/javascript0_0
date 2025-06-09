// let sayi = prompt("Lütfen 1 ile 5 arasi bir sayi giriniz.");

// switch(sayi) // 1 2 3 4 5 
// {
//     case "1":
//     kodlarınız 
//        console.log("Girilen sayi 1'dir");
//     break;

//     case "2":
//        console.log("Girilen sayi 2'dir");
//     break;

//     case "3":
//        console.log("Girilen sayi 3'tür");
//     break;

//     case "4": 
//        console.log("Girilen sayi 4'tür");
//     break;

//     case "5":
//        console.log("Girilen sayi 5'dir");
//     break;

//     default:
//         console.log("Girilen sayi 1 ile 5 arasinda olmalidir");
//     break;
// }


let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
    + "2-Sali" + yeniSatir
    + "3-Carsamba" + yeniSatir
    + "4-Persembe" + yeniSatir
    + "5-Cuma" + yeniSatir
    + "Lütfen bir secim yapiniz";

let deger = prompt(metin);
switch(deger){
    case "1":
        console.log("Bugun Pazartesi");
    break;

    case "2":
        console.log("Bugun Sali");
    break;

    case "3":
        console.log("Bugun Carsamba");
    break;

    case "4":
        console.log("Bugun Persembe");
    break;
    
    case "5":
        console.log("Bugun Cuma");
    break;

    default:
         console.log("Girilen sayi 1 ile 5 arasinda olmalidir");
    break;
}   
