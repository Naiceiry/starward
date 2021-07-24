import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Planets } from "./planets";
export const Listplanets = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.setPlanets();
	}, []);
	const listPlanets = store.planets.map((itemp, indexp) => {
		return (
			<Planets
				key={indexp}
				name={itemp.name}
				url={itemp.url}
				properties={itemp.properties}
				description={itemp.description}
			/>
		);
	});
	return (
		<div className="text-center mt-5">
			<h1>PLANETS</h1>
			<div className="todo">
				<div className="list">{listPlanets}</div>
			</div>
		</div>
	);
};
