function upper(strings,...values) {
	let result = '';
	  for(let i = 0; i < strings.length; i+=1) {
		result += strings[i];
			if(values[i] !== undefined) {
				result += values[i].toUpperCase();			
			}
 	 }
	return result;
}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);
