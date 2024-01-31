import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoTask from "./components/TodoTask";

function App() {
	return (
		<>
			<div className='container mx-auto'>
				<div className='flex flex-col items-center justify-center'>
					<TodoInput />
					<TodoTask />
				</div>
			</div>
		</>
	);
}

export default App;
