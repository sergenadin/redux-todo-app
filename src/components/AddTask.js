import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/actions";

function AddTask({ addTask }) {
	const [task, setTask] = useState({
		description: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (task.description.trim()) {
			addTask({
				description: task.description,
			});
			setTask({
				description: "", // Clear the description field
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
