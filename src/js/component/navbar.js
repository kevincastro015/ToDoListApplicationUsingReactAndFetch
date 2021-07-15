import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<div className="mx-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Click here if you are not scared of the dark.</button>
				</Link>
			</div>
		</nav>
	);
};
