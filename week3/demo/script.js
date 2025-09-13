// 获取元素
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');


// 绑定事件
addButton.addEventListener('click', addTask);

//添加任务函数
function addTask() {
	const taskText = taskInput.value.trim();
	if (taskText === '') {
		alert('请输入任务内容');
		return;
	}

	// 创建任务项容器(li标签)
	const listItem = document.createElement('li');

	// 创建任务文本容器
	const taskSpan = document.createElement('span');
	taskSpan.textContent = taskText;

	// 创建删除按扭
	const deleteButton = document.createElement('button');
	deleteButton.textContent = '删除'; // 按扭显示的文本
	deleteButton.classList.add('delete-btn'); //给按扭增加的类名，方便用于后续cSS样式的控制

	// 组装任务项目
	listItem.appendChild(taskSpan);
	listItem.appendChild(deleteButton);
	todoList.append(listItem);

	//清空输入框
    taskInput.value = '';

	//绑定删除事件
	deleteButton.addEventListener('click', function() {
		todoList.removeChild(listItem);
	});
	

}


taskInput.addEventListener('keyup', function(event) {
	if (event.key === 'Enter') {
		addTask();
	}
});



