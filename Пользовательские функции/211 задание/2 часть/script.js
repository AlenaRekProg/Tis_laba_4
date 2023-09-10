function fun(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return false;
        }
    }
    return true; }
    const arr1 = [2, 3, 4, 5, 6];

    console.log(fun(arr1));