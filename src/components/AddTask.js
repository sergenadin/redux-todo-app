import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/actions";

function AddTask({ addTask }) {
	// State to manage the task description input
	const [task, setTask] = useState({
		description: "",
	});

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (task.description.trim()) {
			// Dispatch the addTask action with the task description
			addTask({
				description: task.description,
			});
			// Clear the description field after adding
			setTask({
				description: "",
			});
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add a task..."
				value={task.description}
				onChange={(e) => setTask({ ...task, description: e.target.value })}
			/>
			<button type="submit">Add</button>
		</form>
	);
}

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

export default connect(mapStateToProps, { addTask })(AddTask);
