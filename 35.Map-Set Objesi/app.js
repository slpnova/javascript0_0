// map objesi

// const map1 = new Map();

// set 
// map1.set("key1", "value1");
// map1.set(true,5)
// map1.set([1,2,3], {firstName: "gul" , lastName : "nyu"})
// map1.set(true,"5")


// let value;
// map1.set(6,"ankara")
// map1.set(7,"antalya")
// map1.set(34,"istanbul")
// map1.set(35,"izmir")


// get
// console.log(map1.get(6)); // ankara
// console.log(map1.get(7)); // antalya
// const donenDeger = map1.get(34);
// console.log(donenDeger); // istanbul

// size 
// value = map1.size; // 7
// console.log(value); // 7

//delete 
// value = map1.delete(35); // izmir silindi
// console.log(map1.size); // 6
// console.log(value); // true


//has 
// value = map1.has(35); // false
// console.log(value); // false
// value = map1.has(34); // true
// console.log(value); // true

// clear
// map1.clear(); // tüm elemanlar silindi
// console.log(map1.size); // 0
// console.log(map1); // Map(0) {}


// map uzerinde donme for of 

// for (let [key, value] of map1) {
//     console.log(key, value);
// }


// const keys = Array.from(map1.keys()); // map1'in anahtarlarını alır
// console.log(keys);
// keys.forEach((key) => {
//     console.log(key);  //! bu sekilde de donulebilir ama bu zor 
// });

// for (let key of map1.keys()) {
//     console.log(key); // 6 7 34
// } //? tum keyleri almak icin yazılır 


//mapten arraye cevirmek 

// const array = Array.from(map1); // map1'i diziye çevirir
// console.log(array); // [[6, "ankara"], [7, "antalya"], [34, "istanbul"]]


// arrayi mape cevirmek 
// const myMap = new Map(array); // array'i Map'e çevirir
// console.log(myMap); // Map(3) { 6 => 'ankara', 7 => 'antalya', 34 => 'istanbul' }




// !set objesi 

const set1 = new Set();
// set eleman ekleme
set1.add("gul");
set1.add("nyu");
set1.add("gul"); // set içinde aynı eleman birden fazla kez eklenemez
set1.add("ryou");
set1.add("arsenik");
set1.add("nova");

// set elemanlarını yazdırma
set1.forEach((value) => {
    console.log(value); // gul nyu ryou arsenik nova
});


// set eleman sayısını alma
console.log(set1.size); // 5


// set elemanlarını diziye çevirme
const setArray = Array.from(set1);
console.log(setArray); // ["gul", "nyu", "ryou", "arsenik", "nova"]


// set elemanlarını silme
set1.delete("gul"); // gul elemanını siler
console.log(set1.size); // 4


// set elemanlarını kontrol etme
console.log(set1.has("nyu")); // true
console.log(set1.has("gul")); // false


// set elemanlarını temizleme
set1.clear();
console.log(set1.size); // 0


// set elemanlarını yazdırma
set1.forEach((value) => {
    console.log(value);
}); // hiçbir şey yazdırmaz çünkü set boş


// set elemanlarını diziye çevirme
const emptySetArray = Array.from(set1);
console.log(emptySetArray); // []


// set elemanlarını yazdırma
set1.forEach((value) => {
    console.log(value); // hiçbir şey yazdırmaz çünkü set boş
}); // hiçbir şey yazdırmaz çünkü set boş
