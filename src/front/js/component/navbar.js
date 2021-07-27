import React from "react";
import { Link } from "react-router-dom";
import startw from "../../img/starward.jpg";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img id="startw" src={startw} />
			</Link>
			<div className="btn-group">
				<button
					type="button"
					className="btn btn-danger dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					FAVORITOS
				</button>
				<div className="dropdown-menu">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item" href="#">
						Separated link
					</a>
				</div>
			</div>
		</nav>
	);
};
