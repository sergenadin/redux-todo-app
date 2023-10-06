// App.js
import React from "react";
import { connect } from "react-redux";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { addTask, completeTask, deleteTask, editTask } from "./actions/actions";

function App(props) {
	return (
		<div className="App">
			<h1>To-Do List</h1>
			<AddTask />
			<TaskList
				tasks={props.tasks}
				completeTask={props.completeTask}
				deleteTask={props.deleteTask}
				editTask={props.editTask}
			/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

export default connect(mapStateToProps, {
	addTask,
	completeTask,
	deleteTask,
	editTask,
})(App);
