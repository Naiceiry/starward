import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { People } from "./people";

export const Listpeople = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.setCharacters();
	}, []);
	const listCharacters = store.characters.map((item, index) => {
		return <People key={index} name={item.name} url={item.url} />;
	});
	return (
		<div className="todo">
			<h1>people</h1>
			{listCharacters}
		</div>
	);
};
