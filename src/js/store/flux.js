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
			},
			deleteElement: newArray => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/kevincastro015", {
					method: "PUT", //or "POST"
					body: JSON.stringify(newArray), // data can be 'string' or {object}!
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
					body: JSON.stringify(data), // data can be 'string' or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => getActions().getTodos());
			}
		}
	};
};

export default getState;
