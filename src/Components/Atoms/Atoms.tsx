import React, { useContext } from "react";
import { StateContext } from "../../Context/CounterContext";

const Atoms = () => {
	const { count, setCount } = useContext(StateContext);

	return (
		<div className="container bg-light pb-3">
			<h6>Atom</h6>

			<div className="container d-flex justify-content-center align-items-center gap-3 mt-5">
				<button className="btn btn-danger" onClick={() => setCount(count - 1)}>
					Decrease
				</button>
				<h2>
					<strong>{count}</strong>
				</h2>
				<button className="btn btn-success" onClick={() => setCount(count + 1)}>
					Increase
				</button>
			</div>
		</div>
	);
};

export default Atoms;
