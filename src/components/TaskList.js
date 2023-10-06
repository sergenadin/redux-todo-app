import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, completeTask, deleteTask, editTask }) {
	// State to track if completed tasks should be shown
	const [showCompleted, setShowCompleted] = useState(false);
	// State to track if not completed tasks should be shown
	const [showNotCompleted, setShowNotCompleted] = useState(false);

	let filteredTasks;

	switch (true) {
		case showCompleted:
			// Show completed tasks
			filteredTasks = tasks.filter((task) => task.isDone);
			break;

		case showNotCompleted:
			// Show not completed tasks
			filteredTasks = tasks.filter((task) => !task.isDone);
			break;

		default:
			// Show all tasks
			filteredTasks = tasks;
			break;
	}

	return (
		<div>
			<div>
				<button
					onClick={() => {
						setShowCompleted(true);
						setShowNotCompleted(false);
					}}
				>
					Show Completed
				</button>
				<button
					onClick={() => {
						setShowCompleted(false);
						setShowNotCompleted(true);
					}}
				>
					Show Not Completed
				</button>
				<button
					onClick={() => {
						setShowCompleted(false);
						setShowNotCompleted(false);
					}}
				>
					Show All
				</button>
			</div>
			<ul>
				{filteredTasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						completeTask={() => completeTask(task.id)}
						deleteTask={() => deleteTask(task.id)}
						editTask={editTask}
					/>
				))}
			</ul>
		</div>
	);
}

export default TaskList;
