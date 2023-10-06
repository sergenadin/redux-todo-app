// Action creator for adding a new task
export const addTask = (description) => ({
	type: "ADD_TASK",
	payload: { description },
});

// Action creator for marking a task as completed
export const completeTask = (index) => ({
	type: "COMPLETE_TASK",
	payload: index,
});

// Action creator for deleting a task
export const deleteTask = (index) => ({
	type: "DELETE_TASK",
	payload: index,
});

// Action creator for editing a task
export const editTask = (index, newText) => ({
	type: "EDIT_TASK",
	payload: { index, newText },
});
