const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			categories: [],
			planet: [],
			characterDetail: null,
			film: []
		},
		actions: {
			getCategories: () => {
				fetch('https://www.swapi.tech/api')
				.then(res => res.json())
				.then(data => {
					const categories = Object.keys(data.result)
					setStore({categories: categories})
				})
				.catch(error => console.log(error))
			},
			getPeople: () => {
				fetch('https://www.swapi.tech/api/people')
				.then(res => res.json())
				.then(data => {
					setStore({people: data.results})
				})
			},
			getPlanet: () => {
				fetch('https://www.swapi.tech/api/planets/')
				.then(res => res.json())
				.then(data => {
					setStore({planet: data.results})
				})
			},
			getPeopleDetail: async (id) => {
				try {
					setStore({ characterDetail: null })
					const res = await fetch(`https://www.swapi.tech/api/people/${id}`)
					const data = await res.json()
					setStore({
						characterDetail: {
							...data.result.properties,
							description: data.result.description,
							uid: data.result.uid
						}
					})
				} catch (error) {
					console.log("Error fetching details:", error)
				}
			},
			getFilm: async () => {
				try{
					const res = await fetch('https://www.swapi.tech/api/films/')
					const data = await res.json()
					setStore({film: data.result})
				} catch (error) {
					console.log("Error fetching details:", error)
				}
			}
		}
	};
};

export default getState;
