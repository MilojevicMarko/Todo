import React from "react";

function TodoTask({ el }) {
	return (
		<div>
			<h3>{el.task}</h3>
		</div>
	);
}

export default TodoTask;
