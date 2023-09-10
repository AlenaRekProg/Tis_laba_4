function calculateAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return NaN; // Возвращаем NaN, если массив пустой или не является массивом
    }

    let sum = 0;
    let validElementCount = 0;

    for (let elem of arr) {
        if (typeof elem === 'number' && !isNaN(elem)) {
            sum += elem;
            validElementCount++;
        }
    }

    if (validElementCount === 0) {
        return NaN; // Если в массиве нет чисел, возвращаем NaN
    }

    return sum / validElementCount;
}

// Примеры вызова функции:
const arr1 = [2, 4, 6, 8, 10];
const arr2 = [2, 4, 'six', 8, 10];
const arr3 = [];

console.log(calculateAverage(arr1)); // Выведет: 6
console.log(calculateAverage(arr2)); // Выведет: NaN, так как есть неправильные типы данных
console.log(calculateAverage(arr3)); // Выведет: NaN, так как массив пустой