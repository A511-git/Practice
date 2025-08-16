let rows = 3, cols = 4;
let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
for(let i=0;i<3;i++){
    for(let j=0;j<4;j++){
        arr[i][j]=a++;
    }
}
console.table(arr);

