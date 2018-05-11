
//let myName= ["Julie"];
//	console.log(myName);

splitArray();

function splitArray() {
	let myName = "Julie";
	let splits = myName.split("").reverse().join("");
		console.log(splits);
		return splits;
}