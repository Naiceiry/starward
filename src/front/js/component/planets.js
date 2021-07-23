import React, { useContext } from "react";
import PropTypes from "prop-types";
import perfil from "../../img/perfil.jpg";
export const Planets = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={perfil} classnName="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.url}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
Planets.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string
};
