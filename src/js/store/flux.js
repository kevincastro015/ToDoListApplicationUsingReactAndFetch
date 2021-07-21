const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			data: []
		},
		actions: {
			getTodos: () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/kevincastro015")
					.then(res => res.json())
					.then(res => setStore({ data: res }));
			},
			addTodo: newData => {
				let data = getStore().data;
				newData = [...data, newData];
				fetch("https://assets.breatheco.de/apis/fake/todos/user/kevincastro015", {
					method: "PUT", // or 'POST'
					body: JSON.stringify(newData), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => getActions().getTodos());
				// let obj = { label: newData, done: false };
				// let data = getStore().data;
				// setStore({ data: [...data, obj] });
				// console.log(getStore().data);
			},
			deleteElement: position => {
				// let data = getStore().data;
				// let newArray = data.filter((item, index) => position !== index);
				fetch("https://assets.breatheco.de/apis/fake/todos/user/kevincastro015", {
					method: "PUT", //or "POST"
					body: JSON.stringify(position), // data can be 'string' or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => getActions().getTodos());
			},
			updateTodo: (label, index) => {
				let data = getStore().data;
				data[index] = { label: label, done: false };
				fetch("https://assets.breatheco.de/apis/fake/todos/user/kevincastro015", {
					method: "PUT", //or "POST"
					body: JSON.stringify(label, index), // data can be 'string' or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => getActions().getTodos());
			}

			// let data = getStore().data;
			// let newArray = data.filter((item, index) => position !== index);
			// setStore({ data: newArray });
			// }.then(() => getActions.getTodos());
		}
	};
};

export default getState;
