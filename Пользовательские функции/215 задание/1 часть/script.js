function fun(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}
let arr = [1, 2, 3, 4, 5];
let res = fun(arr);
console.log(res);