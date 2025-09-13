function add() {
	let num1 = document.getElementById("num1").value;
	num1 = parseFloat(num1);
	let num2 = parseFloat(document.getElementById("num2").value);

	if (isNaN(num1) || isNaN(num2)) {
		console.log("请输入有效数字");
		return ;
	}
	alert(num1 + num2);
}

