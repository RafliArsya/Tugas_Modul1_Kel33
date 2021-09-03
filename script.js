var a = 0;
console.log("ini root scope: " + a);
function q2() {
    a = 5;
    console.log("ini child scope: " + a);
}
q2();
console.log("ini root scope: " + a);

var angka = [1,2,3];
var dobel = angka.map(function(num){
    return num * 2;
});

console.log(angka+"\n"+dobel);

const myArray = [5,10,20];
const reduces = myArray.reduce((total, jumlah)=>total + jumlah);

console.log(reduces);
