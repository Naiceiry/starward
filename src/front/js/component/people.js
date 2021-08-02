import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import perfil from "../../img/perfil.jpg";
import PropTypes from "prop-types";
import { Peoplepages } from "../pages/peoplepages";
import { Link, useParams } from "react-router-dom";
export const People = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.setCharacters();
	}, []);
	store.characters.map((itemp, indexp) => {
		return <Peoplepages key={indexp} name={itemp.name} url={itemp.url} />;
	});
	return (
		<div className="card">
			<img src={perfil} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 value={props.name} className="card-title">
					{props.name}
				</h5>
				<a href={props.url} className="card-text">
					{props.url}
				</a>
				<div className="botones">
					<Link className="bl" to="/detalles">
						<span
							className="btn btn-primary btn-lg"
							href="#"
							role="button"
							onClick={() => actions.setDetalles(props.url)}>
							Learn More!
						</span>
					</Link>
					<i className="bi bi-heart"></i>
				</div>
			</div>
		</div>
	);
};
People.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string
};
