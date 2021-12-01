let arr = [2, -5, 9, 15, 0, -2, -8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }

}
alert(sum);