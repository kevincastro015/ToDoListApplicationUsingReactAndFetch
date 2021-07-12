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
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
