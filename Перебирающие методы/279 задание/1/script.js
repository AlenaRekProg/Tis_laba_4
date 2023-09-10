let arr1 = ["Привет", "Мир", "Как", "дела"];

let arr2 = arr1.map(function(str) {
    return str + '!';
});

console.log(arr2);