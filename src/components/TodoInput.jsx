import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

const TodoInput = ({ todos, setTodos }) => {
	const [currentTask, setCurrentTask] = useState("");

	function handleInput(event) {
		setCurrentTask(event.target.value);
	}

	const handleAddTask = () => {
		if (currentTask) {
			setTodos([
				...todos,
				{ id: new Date().getTime().toString(), task: currentTask },
			]);
			setCurrentTask("");
		} else {
			alert("Please select a task");
		}
	};
	return (
		<div className='flex justify-between'>
			<div className='border-2 border-green-700 rounded-lg flex justify-between'>
				<input
					type='text'
					placeholder='Insert Todo'
					className='px-[16px] py-[8px]
                rounded-lg'
					value={currentTask}
					onChange={(event) => handleInput(event)}
				/>
			</div>
			<div>
				<FaPlusSquare
					size={50}
					color='#0e6e29'
					onClick={handleAddTask}
				/>
			</div>
		</div>
	);
};

export default TodoInput;
