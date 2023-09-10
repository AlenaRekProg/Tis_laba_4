let arr = [5, 7, 3, 10, 4];

let res = arr.some(function(num, id) {
    return num * (id + 1) > 30;
});

if (res) {
    console.log("Хотя бы один элемент удовлетворяет условию.");
} else {
    console.log("Ни один элемент не удовлетворяет условию.");
}