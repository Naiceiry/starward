import React, { useContext } from "react";
import perfil from "../../img/perfil.jpg";
import PropTypes from "prop-types";
import { People } from "../pages/peoplepages";
export const Peoplepages = props => {
	return (
		<div className="card mb-3" style={{ maxwidth: "540px" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={perfil} alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">{props.properties}</p>
						<p className="card-text">{props.description}</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
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
