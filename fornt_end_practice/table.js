// 新增数据函数
function addRow() {
	var table = document.getElementById('table');
	// 获取行
	var length = table.rows.length;
	console.log(length);
	// 插入行节点
	var newRow = table.insertRow(length);

	// 插入列节点对象
	var newName = newRow.insertCell(0);
	var newPhone = newRow.insertCell(1);
	var newAction = newRow.insertCell(2);

	//修改节点文本内容
	newName.innerHTML = '未命名';
	newPhone.innerHTML = '无联系方式';
	newAction.innerHTML = '<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';
}


//删除数据函数
function deleteRow(button) {
	// 获取父节点
	var row = button.parentNode.parentNode;
	console.log(row);
	// 安全检查：确保不删除表头行
	if (row.rowIndex > 0) {
		// 使用更现代的remove方法
		row.remove();
	} else {
		alert('不能删除表头！');
	}
}

function editRow(button) {
	var row = button.parentNode.parentNode;

	var name = row.cells[0];
	var phone = row.cells[1];

	var inputName = prompt('请输入名字： ');
	var inputPhone = prompt('请输入手机号: ');
	
	name.innerHTML = inputName;
	phone.innerHTML = inputPhone;
	
}
