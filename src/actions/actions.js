export const addTask = (description) => ({
	type: "ADD_TASK",
	payload: { description },
});

export const completeTask = (index) => ({
	type: "COMPLETE_TASK",
	payload: index,
});

export const deleteTask = (index) => ({
	type: "DELETE_TASK",
	payload: index,
});

export const editTask = (index, newText) => ({
	type: "EDIT_TASK",
	payload: { index, newText },
});
