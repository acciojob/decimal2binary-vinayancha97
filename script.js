function decimalToBinary(num) {
  // Write your code here
	let binStr = "";
	while(num !== 0){
		let rem = num%2;
		binStr+=rem;
		num = Math.floor(num/2);
	}
	return binStr.split("").reverse().join("");
}

window.decimalToBinary = decimalToBinary;