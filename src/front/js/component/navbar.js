import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/starward.jpg";
import "/workspace/starward/src/front/styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let urlArr;
	let category;
	let element;
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between" id="myNav">
			<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
				<Link to="/">
					<img id="logo" src={logo} />
				</Link>
				<div className="dropdown myDropdown">
					<button
						className="btn btn-outline-warning dropdown-toggle pl-5 pr-5"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						favourite
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<ul>
							{store.favourites && store.favourites.length > 0 ? (
								store.favourites.map(item => {
									urlArr = item.url.split("/");
									category = urlArr[urlArr.length - 2];
									element = urlArr[urlArr.length - 1];
									return (
										<li key={item.url} id="myLiList">
											<Link to={`/${category}/${element}`}>{item.name}</Link>
											<i
												className="far fa-trash-alt"
												onClick={() => actions.deleteFavourite(item.url, store.favourites)}
											/>
										</li>
									);
								})
							) : (
								<p className="pl-3">You do not have any favourite</p>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
