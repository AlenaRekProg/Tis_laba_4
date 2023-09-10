function fun(num) {
    let del = [];
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            del.push(i);
        }
    }
    
    return del;
}
let num = 12;
let res = fun(num);
console.log(res);