import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";

function TodoTask({ el, todos, setTodos }) {
	const handleRemoveTask = (id) => {
		let removeTodo = todos.filter((todo) => todo.id !== id);
		setTodos(removeTodo);
	};
	return (
		<div className='bg-green-600/50 w-[240px] rounded-lg p-3'>
			<div className='flex justify-between items-center'>
				<h3>{el.task}</h3>
				<IoIosRemoveCircle
					size={20}
					color='#ba3127'
					onClick={() => handleRemoveTask(el.id)}
				/>
			</div>
		</div>
	);
}

export default TodoTask;
