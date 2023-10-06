import React, { useState } from "react";

function EditTask({ task, onSave }) {
	const [editedText, setEditedText] = useState(task.description);

	const handleSave = () => {
		// You can access the attributes like task.id, task.description, task.isDone
		// For example, you can use task.id to identify the task being edited

		// Call the onSave callback with the updated text
		onSave(editedText);
	};

	return (
		<div>
			<input
				type="text"
				value={editedText}
				onChange={(e) => setEditedText(e.target.value)}
			/>
			<button onClick={handleSave}>Save</button>
		</div>
	);
}

export default EditTask;
