// let str = "A-";
// console.log(str+511);
// let sum = str + 511;
// console.log(sum);

class obj{
    constructor(is_name,is_age){
        this.name=is_name;
        this.age=is_age;
    }
}
const data = new obj("Alice",21);
console.log(data);
for (const [key, value] of Object.entries(data)) {
  console.log(`${key}: ${value}`);
}
data.student="True";
console.log(data)
