import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/starward.jpg";
import "/workspace/starward/src/front/styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const listFavourites = store.favourites.map(item => {
		let urlArr = item.url.split("/");
		let element = item.uid;
		let category = urlArr[urlArr.length - 2];

		return (
			<li key={item.url} id="myLiList">
				<Link to={`/${category}/${element}`}>{item.name}</Link>
			</li>
		);
	});

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between" id="myNav">
			<div className="row collapse navbar-collapse">
				<div className="col-6">
					<Link to="/">
						<img id="logo" src={logo} />
					</Link>
				</div>
				<div className="col-6 float-right">
					<button
						className="btn btn-outline-warning dropdown-toggle pl-5 pr-5 float-right"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						favourite
					</button>
					<div className="dropdown-menu  pr-12" aria-labelledby="dropdownMenuButton">
						<ul className="float-md-right  pr-12">
							{store.favourites.length > 0 ? (
								listFavourites
							) : (
								<p className=" pl-10 pr-11">You do not have any favourite</p>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
