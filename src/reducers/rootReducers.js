const initialState = {
	tasks: [
		{
			id: 1,
			description: "Sample Task 1",
			isDone: true,
		},
		{
			id: 2,
			description: "Sample Task 2",
			isDone: true,
		},
		// ...other tasks
	],
};

function nextTodoId(tasks) {
	if (!Array.isArray(tasks) || tasks.length === 0) {
		// Handle the case when tasks is not an array or is empty
		return 1; // You might start with ID 1 in this case, for example
	}

	const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);
	return maxId + 1;
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TASK":
			console.log("Tasks before adding:", state.tasks); // For looking the difference between objects
			return {
				...state,
				// but has a new array for the `tasks` field
				tasks: [
					// with all of the old tasks
					...state.tasks,
					// and the new tasks object
					{
						// Use an auto-incrementing numeric ID for this example
						id: nextTodoId(state.tasks),
						description: action.payload.description.description,
						isDone: false,
					},
				],
			};

		case "COMPLETE_TASK":
			const taskIdToComplete = action.payload;
			const updatedTasks = state.tasks.map((task) =>
				task.id === taskIdToComplete
					? { ...task, isDone: !task.isDone } // Toggle the isDone status
					: task
			);
			return {
				...state,
				tasks: updatedTasks,
			};

		case "DELETE_TASK":
			const taskIdToDelete = action.payload;
			const filteredTasks = state.tasks.filter(
				(task) => task.id !== taskIdToDelete
			);
			return {
				...state,
				tasks: filteredTasks,
			};
		// reducers/rootReducer.js
		// ... (other parts of the reducer)

		case "EDIT_TASK":
			console.log("edit task:", state.tasks);
			const editedTasks = [...state.tasks];
			//console.log("Tasks before adding:", action.payload.newText);
			//onsole.log("test ", editedTasks[action.payload.index].description);

			editedTasks[action.payload.index] = action.payload.newText;
			return {
				...state,
			};
		default:
			return state;
	}
};

export default rootReducer;
