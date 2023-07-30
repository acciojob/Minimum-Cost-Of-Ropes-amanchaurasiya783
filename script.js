function calculateMinCost() {
  //your code here
	const rope = document.getElementById("form").value;
	let ropeArray = Array.from(rope);
	let sortedArr = ropeArray.sort((a,b) =>{return a-b;});
	let cost = 0;
	let n = sortedArr.length;
	while (n != 1) {
		for(let i=0; i<n; i++){
		cost += sortedArr[i];
	}
	n--
	}
	document.getElementById("result").innerHTML = cost;
}  