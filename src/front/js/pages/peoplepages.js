import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import perfil from "../../img/perfil.jpg";
import PropTypes from "prop-types";
import "../../styles/home.scss";
export const Peoplepages = props => {
	const { store, actions } = useContext(Context);

	console.log(store.properties);
	const listproperties = store.properties.map((item, index) => {
		return (
			<div key={index}>
				<p>
					{item[0]}
					{item[1]}
				</p>
			</div>
		);
	});
	return (
		<div className="grand mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img className="imgperfil" src={perfil} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">{props.url}</p>
						<p>{listproperties}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
Peoplepages.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	description: PropTypes.string,
	properties: PropTypes.array
};
