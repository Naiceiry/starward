import React, { useContext } from "react";
import perfil from "../../img/perfil.jpg";
import PropTypes from "prop-types";
import { People } from "../component/people";
import "../../styles/home.scss";
export const Peoplepages = props => {
	return (
		<div className="grand mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img className="imgperfil" src={perfil} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">{props.properties}</p>
						<p className="card-text">{actions.details[url]}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
Peoplepages.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	properties: PropTypes.object,
	description: PropTypes.string
};
