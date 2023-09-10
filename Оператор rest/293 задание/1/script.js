function fun(...num) {
    if (num.length === 0) {
        return 0; 
    }
let sum = num.reduce((a, b) => a + b, 0);
    return sum / num.length;
}

let arr = fun(1, 2, 3, 4, 5);
console.log(arr);