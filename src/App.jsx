import React, { useEffect, useState } from 'react'
import NewTaskButton from './components/NewTaskButton/index'
import TaskScreen from './components/TaskScreen'



function App() {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		const savedTasks = localStorage.getItem('tasks')
		if (savedTasks) {
			setTasks(JSON.parse(savedTasks))
		}

		console.log('Primeiro useEffect');
	}, [])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const handleAddTasks = (newTask) => {
		setTasks([newTask, ...tasks]);
	};

	const handleDeleteTask = (index) => {
		const updatedTasks = [...tasks]
		updatedTasks.splice(index, 1)
		setTasks(updatedTasks)
	}

	const handleToggleTask = (index) => {
		const updatedTasks = [...tasks]
		updatedTasks[index].checked = !updatedTasks[index].checked
		setTasks(updatedTasks)
	}



	return (
		<>
			<NewTaskButton onAddTask={handleAddTasks} />
			<TaskScreen tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
		</>
	)
}

export default App
