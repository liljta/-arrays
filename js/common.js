var arr = [];
for (var i = 0; i < 30; i++) {
    arr[i] = Math.floor(Math.random () * 30);
}
console.log(arr);

console.log ('туда');
for (i = 0; i <30; i++) {
    console.log(arr[i]);
}
console.log ('назад');
for (i = 29; i >= 0; i--) {
    console.log(arr[i]);
}



var arr2 = [];
for (i = 0; i < 20; i++){
    arr2[i] = Math.floor(Math.random() * 30) - 10;
}
console.log(arr2);

for (i = 0; i < 20; i++) {
    if (arr2[i] < 0) {
        arr2[i] = 0;
    }
}
console.log(arr2);
