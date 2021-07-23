import React, { useContext } from "react";
import perfil from "../../img/perfil.jpg";
import PropTypes from "prop-types";
export const Species = props => {
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
Species.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string
};
import React, { useContext } from "react";
import perfil from "../../img/perfil.jpg";
import PropTypes from "prop-types";
import { Peoplepages } from "../pages/peoplepages";
import { Link, useParams } from "react-router-dom";
export const People = props => {
	return (
		<div className="card">
			<img src={perfil} classnName="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<a href={props.url} className="card-text">
					{props.url}
				</a>
				<div className="botones">
					<Link className="bl" to="/detalles">
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
People.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	properties: PropTypes.object,
	description: PropTypes.string
};