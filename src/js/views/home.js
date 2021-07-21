import React, { useState, useContext } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
// import Button from "../component/button";
import { Context } from "../store/appContext";
import { element } from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [todo, setTodo] = useState("");
	const [edit, setEdit] = useState({ state: false, i: undefined });
	const [input, setInput] = useState("");
	const todoList = store.data;

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
				<button
					className="btn btn-success text-center"
					onClick={() => actions.addTodo({ label: todo, done: false })}>
					Add
				</button>
				{store.data.map((e, index) => (
					<div key={index} className="border-top border-bottom text-secondary text-center">
						{!edit.state && edit.i == index ? (
							<input placeholder={e.label} onChange={e => setInput(e.target.value)} />
						) : (
							e.label
						)}
						<i
							onClick={() => actions.deleteElement(store.data.filter(item => e !== item))}
							className="far fa-window-close"
						/>
						{!edit.state && edit.i == index ? (
							<i
								className="far fa-check-square"
								onClick={() => {
									setEdit({ state: true, i: index });
									actions.updateTodo(input, index);
								}}
							/>
						) : (
							<i className="fas fa-pencil-alt" onClick={() => setEdit({ state: false, i: index })} />
						)}
					</div>
				))}
				<div className="counter text-secondary text-left">Item(s) Left {store.data.length} </div>
			</div>
			<div className="border mx-auto" style={{ width: "98%", height: 3 }} />
			<div className="border mx-auto" style={{ width: "96%", height: 3 }} />
		</div>
	);
};
