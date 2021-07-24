import PropTypes, { object } from "prop-types";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			species: [],
			details: [],
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
				fetch("https://www.swapi.tech/api/people")
					.then(resp => resp.json())
					.then(data => {
						setStore({ characters: data.results });
					});
			},
			setDetalles: url => {
				const store = getStore();
				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						let arrdetalles = data.results;
						let Details = object.entries(arrdetalles.properties);
						setStore({ properties: Details });
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
