import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Listplanets = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.setPlanets();
	}, []);
	const listPlanets = store.planets.map((itemp, indexp) => {
		return <Planets key={indexp} name={itemp.name} url={itemp.url} />;
	});
	return (
		<div className="text-center mt-5">
			<ul>
				<li>
					<h1>PLANETS</h1>
					{listPlanets}
				</li>
			</ul>
		</div>
	);
};
