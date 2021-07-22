import React, { useContext } from "react";
import perfil from "../../img/perfil.jpg";
import PropTypes from "prop-types";
export const People = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={perfil} classnName="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text"> {props.url} </p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
People.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string
};
