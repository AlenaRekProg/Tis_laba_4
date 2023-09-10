function func(number) {
    let count = 0;
    while (number >= 10) {
        number /= 2;
        count++;
    }
    return count;
}

console.log(func(100)); 
console.log(func(50)); 
console.log(func(32));