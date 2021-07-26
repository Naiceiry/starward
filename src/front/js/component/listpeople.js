import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
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
		<div className="text-center mt-5">
			<h1>PEOPLE</h1>
			<div className="todo">
				<div className="list"> {listCharacters}</div>
			</div>
		</div>
	);
};
