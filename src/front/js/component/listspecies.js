import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Listspecies = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.setSpecies();
	}, []);
	const listSpecies = store.species.map((items, indexs) => {
		return <li key={indexs}>{items.name}</li>;
	});
	return (
		<div className="text-center mt-5">
			<ul>
				<li>
					<h1>SPECIES</h1>
					{listSpecies}
				</li>
			</ul>
		</div>
	);
};
