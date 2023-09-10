function func(employee) {
([name, surname, ... info]) 
	console.log(name);
	console.log(surname);
	console.log(info);
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );