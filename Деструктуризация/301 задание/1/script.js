let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department = 1] = arr;

let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}