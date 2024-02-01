import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoTask from "./components/TodoTask";

function App() {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<div className='container mx-auto '>
			<div className='flex flex-col items-center justify-center h-[100vh]'>
				<h1 className='mb-[10px]'>TODO APP</h1>
				<TodoInput
					todos={todos}
					setTodos={setTodos}
				/>
				{todos.map((el) => {
					return (
						<TodoTask
							key={el.id}
							el={el}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
