import Pages from "./Components/Pages/Pages";
import { useState } from "react";
import { StateContext } from "./Context/CounterContext";

function App() {
	const [count, setCount] = useState<number>(0);

	return (
		<div className="container text-center bg-primary pb-3">
			<h1>Counter App</h1>
			<StateContext.Provider value={{ count, setCount }}>
				<Pages />
			</StateContext.Provider>
		</div>
	);
}

export default App;
