import PropTypes, { object } from "prop-types";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			species: [],
			properties: [],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setCharacters: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people")
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						let arrLike = data.results.map(item => {
							return { ...item, like: false, type: "people" };
						});
						setStore({ characters: data.results, arrLike: arrLike });
					});
			},
			/*	likesClick: (id, bool, type) => {
				const store = getStore();
				if (type == "people") {
					const heart = store.people.map((elem, i) => {
						if (i === id) elm.like = bool;
						return elm;
					});
					setStore({ people: heart });
				} else if (type == "planets") {
					const heart = store.planets.map((elem, i) => {
						if (i === id) elm.like = bool;
						return elm;
					});
					setStore({ planets: heart });
				} else if (type == "species") {
					const heart = store.species.map((elem, i) => {
						if (i === id) elm.like = bool;
						return elm;
					});
					setStore({ species: heart });
				}
			},*/
			setDetalles: url => {
				const store = getStore();
				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
						let arrdetalles = data.result;
						console.log(arrdetalles);
						let details = Object.entries(arrdetalles.properties);
						setStore({ properties: details });
					});
			},
			setPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(resp => resp.json())
					.then(data => {
						setStore({ planets: data.results });
					});
			},
			setSpecies: () => {
				fetch("https://www.swapi.tech/api/species")
					.then(resp => resp.json())
					.then(data => {
						setStore({ species: data.results });
					});
			}
		}
	};
};

export default getState;
