let arr = [1, 2, 3, 4, 5];

let check = arr.every(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(check);