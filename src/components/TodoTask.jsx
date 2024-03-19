import React, { useState } from "react";
import { IoIosRemoveCircle, IoIosCheckmarkCircle } from "react-icons/io";
import { BiSolidEditAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function TodoTask({ el, todos, setTodos }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTask, setEditedTask] = useState("");

	const handleRemoveTask = (id) => {
		let removeTodo = todos.filter((todo) => todo.id !== id);
		setTodos(removeTodo);
	};
	const handleEditTodo = () => {
		setIsEditing(true);
	};
	const handleSaveEdit = () => {
		const updatedTodos = todos.map((todo) =>
			todo.id === el.id ? { ...todo, task: editedTask } : todo
		);
		setTodos(updatedTodos);
		setIsEditing(false);
	};

	const handleCancelEdit = () => {
		// setEditedTask(el.task);
		setIsEditing(false);
	};

	const handleChange = (event) => {
		setEditedTask(event.target.value);
	};

	return (
		<div className='bg-green-600/50 w-[275px] rounded-lg p-2'>
			{isEditing ? (
				<div className='flex justify-between items-center '>
					<input
						type='text'
						value={editedTask}
						onChange={handleChange}
						className='rounded-lg py-2 m-1 px-1 border-b-slate-400'
					/>
					<div className='flex justify-between items-center flex-wrap'>
						<IoIosCheckmarkCircle
							onClick={handleSaveEdit}
							className='mr-2 cursor-pointer'
							color='#0e6e29'
							size={25}
						/>
						<RxCross2
							onClick={handleCancelEdit}
							color='#ba3127'
							size={25}
							className='cursor-pointer'
						/>
					</div>
				</div>
			) : (
				<div className='flex justify-between items-center mt-2'>
					<h3>{el.task}</h3>
					<div className='flex justify-between'>
						<IoIosRemoveCircle
							size={25}
							color='#ba3127'
							onClick={() => handleRemoveTask(el.id)}
							className='mr-3 cursor-pointer'
						/>
						<BiSolidEditAlt
							size={25}
							color='#0e6e29'
							onClick={handleEditTodo}
							className='cursor-pointer'
						/>
					</div>
				</div>
			)}
			<div className='flex justify-between items-center mt-10 pt-10 border-t-[4px] border-green-700'>
				<p>{todos.length} item(s) left</p>
				<p
					onClick={() => setTodos([])}
					className='cursor-pointer'>
					Clear All
				</p>
			</div>
		</div>
	);
}

export default TodoTask;
