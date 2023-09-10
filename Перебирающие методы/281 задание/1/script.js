let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let res = arr.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(res);