const initialState = {
	tasks: [
		// Sample tasks with id, description, and isDone properties
		{
			id: 1,
			description: "Sample Task 1",
			isDone: true,
		},
		{
			id: 2,
			description: "Sample Task 2",
			isDone: false,
		},
		{
			id: 3,
			description: "Sample Task 3",
			isDone: true,
		},
		{
			id: 4,
			description: "Sample Task 4",
			isDone: false,
		},
		// ...other tasks
	],
};

// Function to calculate the next available task ID
function nextTodoId(tasks) {
	// Handle the case when tasks is not an array or is empty
	if (!Array.isArray(tasks) || tasks.length === 0) {
		return 1; // Start with ID 1
	}

	// Find the maximum ID in the current tasks
	const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);
	return maxId + 1;
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TASK":
			console.log("Tasks before adding:", state.tasks);
			return {
				...state,
				// Create a new tasks array with the added task
				tasks: [
					...state.tasks,
					{
						// Generate a new auto-incremented ID
						id: nextTodoId(state.tasks),
						description: action.payload.description.description,
						isDone: false,
					},
				],
			};

		case "COMPLETE_TASK":
			const taskIdToComplete = action.payload;
			// Map through tasks and toggle the isDone status of the specified task
			const updatedTasks = state.tasks.map((task) =>
				task.id === taskIdToComplete ? { ...task, isDone: !task.isDone } : task
			);
			return {
				...state,
				tasks: updatedTasks,
			};

		case "DELETE_TASK":
			const taskIdToDelete = action.payload;
			// Filter out the task with the specified ID to delete it
			const filteredTasks = state.tasks.filter(
				(task) => task.id !== taskIdToDelete
			);
			return {
				...state,
				tasks: filteredTasks,
			};

		case "EDIT_TASK":
			console.log("edit task:", state.tasks);
			const editedTasks = [...state.tasks];
			// Update the task with the new text
			editedTasks[action.payload.index] = action.payload.newText;
			return {
				...state,
			};

		default:
			return state;
	}
};

export default rootReducer;
