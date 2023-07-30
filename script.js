function calculateMinCost() {
  //your code here
	const inputField = document.getElementById("rope-lengths");
    const outputElement = document.getElementById("result");
    const inputValues = inputField.value.split(",");
    const intArray = inputValues.map(value => parseInt(value.trim(), 10));
    intArray.sort((a,b) => {return a-b});
	let cost = 0;
	let n = intArray.length;
	while (n > 1) {
        let arr = intArray.splice(0,2);
        let sum = arr[0] + arr[1];
        cost += sum;
        intArray.push(sum);
        intArray.sort((a,b) => {return a-b});
        n = intArray.length;
	}
	document.getElementById("result").innerHTML = cost;
}