import React, { useState } from "react";
import EditTask from "./EditTask";

function Task({ task, completeTask, deleteTask, editTask }) {
	const [isEditing, setIsEditing] = useState(false);

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = (editedText) => {
		task.description = editedText;

		// Call the editTask action with the updated task
		editTask(task.id, editedText);
		setIsEditing(false);
	};

	return (
		<li className={task.isDone ? "completed" : ""}>
			{isEditing ? (
				<EditTask task={task} onSave={handleSave} />
			) : (
				<>
					<span
						className={`check-icon ${task.isDone ? "completed" : ""}`}
						onClick={completeTask}
					>
						{task.isDone ? "✔" : "○"}
					</span>

					<span> {JSON.stringify(task.description)}</span>

					<button onClick={completeTask}>Complete</button>
					<button onClick={handleEdit}>Edit</button>
					<button onClick={deleteTask}>Delete</button>
				</>
			)}
		</li>
	);
}

export default Task;
