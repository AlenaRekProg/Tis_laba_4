function func(arr1, arr2) {
    let res1 = 0;
    let res2 = 0;

    for (let elem of arr1) {
        res1 += elem;
    }

    for (let elem of arr2) {
        res2 += elem;
    }

    if (res2 === 0) {
        return NaN; // Возвращаем NaN в случае деления на ноль
    }

    return res1 / res2;
}

// Примеры вызова функции:
const arr1 = [2, 4, 6, 8, 10];
const arr2 = [1, 2, 3, 4, 5];

console.log(func(arr1, arr2)); // Выведет: 1.9