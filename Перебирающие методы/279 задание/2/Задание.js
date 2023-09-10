let arr1 = ["Намджун", "Сокджин", "Юнги", "Хосок", "Чимин", "Тэхён", "Чонгук"];

let arr2 = arr1.map(function(str) {
    return str.split('').reverse().join('');
});

console.log(arr2);