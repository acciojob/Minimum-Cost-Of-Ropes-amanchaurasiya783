function calculateMinCost() {
  //your code here
	const inputField = document.getElementById("rope-lengths");
    const outputElement = document.getElementById("result");
    const inputValues = inputField.value.split(",");
    const intArray = inputValues.map(value => parseInt(value.trim(), 10));
    intArray.sort((a,b) => {return a-b});
	let cost = 0;
	let n = intArray.length;
	while (n != 1) {
		for(let i=0; i<n; i++){
		cost += intArray[i];
	}
	n--
	}
	document.getElementById("result").innerHTML = cost;
}