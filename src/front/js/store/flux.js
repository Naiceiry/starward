import PropTypes, { object } from "prop-types";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			species: [],
			properties: [],
			favourites: [],
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
			addFavourite: dataNewElement => {
				const store = getStore();
				let newFavourites = [...store.favourites, dataNewElement];
				setStore({ favourites: newFavourites });
			},
			setDetalles: url => {
				const store = getStore();
				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						let arrdetalles = data.result;
						let details = Object.entries(arrdetalles.properties);
						setStore({ properties: details });
					});
			},
			deleteFavourite: (itemUrl, favouritesArr) => {
				favouritesArr.map((item, index) => {
					if (item.url === itemUrl) {
						item.favorite = false;
						favouritesArr.splice(index, 1);
						setStore({ favourites: [...favouritesArr] });
					}
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
