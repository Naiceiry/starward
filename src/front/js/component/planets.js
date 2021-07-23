import React, { useContext } from "react";
import PropTypes from "prop-types";
import perfil from "../../img/perfil.jpg";
//import { Planetspages } from "../pages/planetspages";
import { Link, useParams } from "react-router-dom";
export const Planets = props => {
	return (
		<div className="card">
			<img src={perfil} classnName="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<a href={props.url} className="card-text">
					{props.url}
				</a>
				<div className="botones">
					<Link className="bl" to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Learn More!
						</span>
					</Link>
					<Link className="br" to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							IL
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
Planets.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	properties: PropTypes.object,
	description: PropTypes.string
};
