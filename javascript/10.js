
// let adjective_a = "Crazy";
// let adjective_s = "Amazing";
// let adjective_d = "Fire";

// let shop_a = "Garments";
// let shop_s = "Foods";
// let shop_d = "Engine";

// let word_a = "Hub";
// let word_s = "Limited";
// let word_d = "Bros";
// let random, gen_name="";

// random = Math.floor(Math.random()*3)+1;
// if (random == 1) {
//     gen_name+=adjective_a;
// }
// if (random == 2) {
//     gen_name+=adjective_s;
// }
// if (random == 3) {
//     gen_name+=adjective_d;
// }

// random = Math.floor(Math.random()*3)+1;
// if (random == 1) {
//     gen_name+=shop_a;
// }
// if (random == 2) {
//     gen_name+=shop_s;
// }
// if (random == 3) {
//     gen_name+=shop_d;
// }

// random = Math.floor(Math.random()*3)+1;
// if (random == 1) {
//     gen_name+=word_a;
// }
// if (random == 2) {
//     gen_name+=word_s;
// }
// if (random == 3) {
//     gen_name+=word_d;
// }

// alert(`Genrated Name is : ${gen_name}`);

// console.log("I got ur back");
// console.log("✅ JS file is connected!");

let string = "Dont worry i got your back";
// if(string.startsWith("Dont")){
//     console.log("Starts with Dont is "+ string.startsWith("Dont"));
// }
// if(string.startsWith("Worry")){
//     console.log("Starts with Worry is "+ string.startsWith("Worry"));
// }

// console.log(string)
// string=string.toLocaleLowerCase();
// console.log(string)
let i;
for (i = string.length; i >= 0; i--) {
    if(string[i]==" ")
        break;    
}
console.log(i);
console.log(string.slice(i,string.length));