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
			data: ["Mary", "Jane"]
		},
		actions: {
			// Use getActions to call a function within a fuction
			updateArray: newData => {
				let data = getStore().data;
				setStore({ data: [...data, newData] });
			},
			deleteElement: position => {
				let data = getStore().data;
				let newArray = data.filter((item, index) => position !== index);
				setStore({ data: newArray });
				// },
				// getTodo: () => {
				// 	fetch("https://assets.breatheco.de/apis/fake/todos/user/kevincastro015")
				// 		.then(res => res.json())
				// 		.then(response => setStore({ data: response }));
				// },
				// addData: "",
				// updateData: "",
				// deleteData: data => {
				// 	fetch("https://assets.breatheco.de/apis/fake/todos/user/kevincastro015", {
				// 		method: "PUT", //or "POST"
				// 		body: JSON.stringify(data), // data can be 'string' or {object}!
				// 		headers: {
				// 			"Content-Type": "application/json"
				// 		}
				// 	})
				// 		.then(res => res.json())
				// 		.then(() => getActions.getData());
				//     },
				//     addTitle: title => (title === "" ? setStore({ listTitle: "No title"}) : setStore({ listTitle })),
				//     addItem: newItem => {
				//         let newTodoList = getStore().todoList;
				//         setStore({ todoList: [...newTodoList, newItem] });
				//     },
				//     deleteItem: element => {
				//         let deleteItem = getStore().todoList;
				//         deleteItem = deleteItem.filter(item => element !== item);
				//     },
				//     setStore ({ todoList: deleteItem });
				//     },
				//     deleteList: () => {
				//         setStore({ todoList: [] });
				// }

				// },

				// changeColor: (index, color) => {
				// 	//get the store
				// 	const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				// const demo = store.demo.map((elm, i) => {
				// 	if (i === index) elm.background = color;
				// 	return elm;
				// });

				//reset the global store
				// setStore({ demo: demo });
			}
		}
	};
};

export default getState;
