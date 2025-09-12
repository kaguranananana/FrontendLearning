function processForm() {
	// 获取用户输入的年龄和性别
	let gender = document.getElementById('gender').value;
	let age = document.getElementById('age').value;


	let greeting = '';
	if (gender === 'male') {
		greeting = (age > 20 ? "大哥" : "小孩");
	} else if (gender === 'female') {
		greeting = (age > 20 ? '女士' : '女孩');
	} else {
		greeting = '感谢提交';
	}

	document.getElementById("greetingMessage").innerText = greeting;

	console.log(greeting);
	
}