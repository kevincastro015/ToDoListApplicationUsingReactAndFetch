import React, { useState, useContext } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Button from "../component/button";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState("");

	return (
		<>
			<input onChange={e => setState(e.target.value)} />
			<button onClick={() => actions.updateArray(state)}>Add</button>
			{store.data.map((e, index) => (
				<div key={e} className="text-center mt-5">
					{e}
					<i onClick={() => actions.deleteElement(index)} className="far fa-window-close" />
				</div>
			))}
		</>
	);
};
