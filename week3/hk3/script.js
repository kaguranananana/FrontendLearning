const countDisplay = document.getElementById('count-display');
const incrementBtn = document.getElementById('increment-btn');


// 初始化一个变量
let count = 0;
// 为按扭添加事件监听S
incrementBtn.addEventListener('click', function() {
	count++;
	countDisplay.textContent = count;
});

const changeBgBtn = document.getElementById('change-bg-btn');
const body = document.body;


function getRandomHexColor() {
	const hexChars = '0123456789abcdef';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		const randomIndex = Math.floor(Math.random() * 16);
		color +=hexChars[randomIndex];
	}
	return color;
}


changeBgBtn.addEventListener('click', function() {
	const directions = [
		'to right top', 
		'to right bottom',
		'to left bottom', 
		'to left top',
	];


	// 从数组中随机选择一个方向
	const randomDirection = directions[Math.floor(Math.random() * directions.length)];

	// 需要生成的颜色数量 (增加到2-4个颜色)
	const colorCount = Math.floor(Math.random() * 3) + 1;

	const colors = [];

	for (let i = 0; i < colorCount; i++) {
		colors.push(getRandomHexColor());
	}



	// 根据方向和颜色数组组合成CSS渐变字符串
	const gradient = `linear-gradient(${randomDirection}, ${colors.join(', ')})`;

	body.style.background = gradient;
	
	// 在控制台输出生成的渐变，方便调试
	console.log('Generated gradient:', gradient);

});

