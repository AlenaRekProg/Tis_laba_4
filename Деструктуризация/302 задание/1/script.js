function func() {
	return (new Date).getDate();
}
function func1() {
	return (new Date).getFullYear();
}
function func2() {
	return (new Date).getMonth();
}
let arr = [func1(), func2()];
let [year, month, day = func()] = arr;

console.log (year)
console.log (month)
console.log (day)