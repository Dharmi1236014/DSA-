let arr = [3, 4, 67, 48, 36, 27];
let max = arr[0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    if (sum < 0) {
        sum = 0;
    }
    if (sum > max) {
        max = sum
    }

}
console.log(max);

