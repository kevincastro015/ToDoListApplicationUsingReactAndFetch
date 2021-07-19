import React, { useState, useContext } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Button from "../component/button";
import { Context } from "../store/appContext";
import { element } from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [todo, setTodo] = useState("");

	return (
		<div className="mt-5 bg-light mx-auto p-4 text-secondary" style={{ width: 400 }}>
			<h1 className="text-center">todos</h1>
			<div className="border text-center ">
				<input
					className="input"
					placeholder="What needs to be done"
					onChange={e => setTodo(e.target.value)}
					value={todo}
				/>
				<button className="btn btn-success text-center" onClick={() => actions.updateArray(todo)}>
					Add
				</button>
				{store.todos.map((
					e,
					index //change .map to .todos in flux
				) => (
					<div key={e} className="border-top border-bottom text-secondary text-center ">
						{e + 1} - {element.label}
						<i onClick={() => actions.deleteElement(index)} className="far fa-window-close" />
					</div> // added + 1 - {element.label}
				))}
				<div className="counter text-secondary text-left">Item(s) Left {store.data.length} </div>
			</div>
			<div className="border mx-auto" style={{ width: "98%", height: 3 }} />
			<div className="border mx-auto" style={{ width: "96%", height: 3 }} />
			{/* {!edit ? (
				<i className="fas fa-pencil-alt" onClick={() => setEdit(true)} />
			) : (
				<i className="far fa-check-square" onClick={() => setEdit(false)} />
			)} */}
		</div>
	);
};
