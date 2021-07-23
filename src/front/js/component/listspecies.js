import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Species } from "./species";
export const Listspecies = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.setSpecies();
	}, []);
	const listSpecies = store.species.map((items, indexs) => {
		return <Species key={indexs} name={items.name} url={items.url} />;
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
