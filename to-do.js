document.addEventListener('DOMContentLoaded', function () {
	const taskInput = document.getElementById('input2');
	const container = document.querySelector('.container1');

	const taskList = document.createElement('ul');
	taskList.id = 'task-list';
	container.appendChild(taskList);

	window.addTask = function () {
		const taskText = taskInput.value.trim();
		if (taskText === '') return;

		const li = document.createElement('li');
		li.classList.add('task', 'pending');

		const span = document.createElement('span');
		span.textContent = taskText;
		span.addEventListener('click', () => {
			li.classList.toggle('completed');
			li.classList.toggle('pending');
		});

		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = '❌';
		deleteBtn.classList.add('delete-btn');
		deleteBtn.addEventListener('click', () => {
			taskList.removeChild(li);
		});

		li.appendChild(span);
		li.appendChild(deleteBtn);
		taskList.appendChild(li);

		taskInput.value = '';
	};

	window.filterTasks = function (filter) {
		const tasks = document.querySelectorAll('.task');

		tasks.forEach((task) => {
			switch (filter) {
				case 'all':
					task.style.display = 'flex';
					break;
				case 'completed':
					task.style.display = task.classList.contains('completed')
						? 'flex'
						: 'none';
					break;
				case 'pending':
					task.style.display = task.classList.contains('pending')
						? 'flex'
						: 'none';
					break;
			}
		});
	};
});
