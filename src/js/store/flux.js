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
			updateArray: newData => {
				let obj = { label: newData, done: false };
				let data = getStore().data;
				setStore({ data: [...data, obj] });
				// console.log(getStore().data);
			},
			deleteElement: () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/kevincastro015", {
					method: "PUT", //or "POST"
					body: JSON.stringify(), // data can be 'string' or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(() => getActions.getTodos());
				// },
				// let data = getStore().data;
				// let newArray = data.filter((item, index) => position !== index);
				// setStore({ data: newArray });
			}
		}
	};
};

export default getState;
