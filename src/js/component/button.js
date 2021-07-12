import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Button = ({ button, style, index }) => {
	// const { store } = useContext(Context);
	// const [state, setState] = useState("");
	const [data, setData] = React.useState("");
	update(data);
	// button = store.data[index = +1] === true ? store.data[index + 1] : store.data[index];
	return (
		<button className={style} onClick={() => setState(button)}>
			{button}
		</button>
	);
};

Button.propTypes = {
	button: PropTypes.string,
	style: PropTypes.string,
	index: PropTypes.func
};

export default Button;
