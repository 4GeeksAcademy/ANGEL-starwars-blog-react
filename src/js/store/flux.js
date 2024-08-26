const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			categories: [],
			planet: [],
			detail: null,
			film: [],
			species: [],
			starship: [],
			vehicle: [],
			favorites: [],
			selectedCategory: null,
			selectedCategoryName: null
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
			getPeopleDetail: async (id) => {
				setStore({ ...getStore(), detail: null })
				try {
					const res = await fetch(`https://www.swapi.tech/api/people/${id}`)
					const data = await res.json()
					setStore({ ...getStore(),
						detail: {
							...data.result.properties,
							description: data.result.description,
							uid: data.result.uid
						}
					})
				} catch (error) {
					console.log("Error fetching people details:", error)
				}
			},
			getPlanet: () => {
				fetch('https://www.swapi.tech/api/planets/')
				.then(res => res.json())
				.then(data => {
					setStore({ ...getStore(), planet: data.results})
				})
			},
			getPlanetDetail: async (id) =>{
				setStore({ ...getStore(), detail: null })
				try {
					const res = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					const data = await res.json()
					setStore({ ...getStore(),
						detail: {
							...data.result.properties,
							description: data.result.description,
							uid: data.result.uid
						}
					})
				} catch (error) {
					console.log("Error fetching planet details:", error)
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
			},
			getFilmDetail: async (id) =>{
				setStore({ ...getStore(), detail: null })
				try {
					const res = await fetch(`https://www.swapi.tech/api/films/${id}`)
					const data = await res.json()
					setStore({ ...getStore(),
						detail: {
							...data.result.properties,
							uid: data.result.uid
						}
					})
				} catch (error) {
					console.log("Error fetching film details:", error)
				}
			},
			getSpecies: async () => {
				try {
					const res = await fetch('https://www.swapi.tech/api/species')
					const data = await res.json()
					setStore({species: data.results})
				}catch (error){
					console.log("Error fetching species:", error)
				}
			},
			getSpeciesDetail: async (id) => {
				setStore({...getStore(), detail: null})
				try{
					const res = await fetch(`https://www.swapi.tech/api/species/${id}`)
					const data = await res.json()
					setStore({...getStore(),
						detail: {
							...data.result.properties,
							description: data.result.description,
							uid: data.result.uid
						}
					})
				}catch (error){
					console.log("Error fetching species:", error)
				}
			},
			getStarShip: async () => {
				try{
					const res = await fetch('https://www.swapi.tech/api/starships')
					const data = await res.json()
					setStore({starship: data.results})
				}catch (error){
					console.log("Error fetching starships:", error)
				}
			},
			getStarShipDetail: async (id) => {
				setStore({...getStore, detail: null})
				try{
					const res = await fetch(`https://www.swapi.tech/api/starships/${id}`)
					const data = await res.json()
					setStore({...getStore(),
						detail: {
							...data.result.properties,
							description: data.result.description,
							uid: data.result.uid
						}
					})
				}catch (error){
					console.log("Error fetching starShip:", error)
				}
			},
			getVehicle: async () => {
				try{
					const res = await fetch('https://www.swapi.tech/api/vehicles')
					const data = await res.json()
					setStore({vehicle: data.results})
				}catch (error){
					console.log("Error fetching vehicle", error)
				}
			},
			getVehicleDetail: async (id) => {
				setStore({...getStore(), detail:null})
				try{
					const res = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					const data = await res.json()
					setStore({...getStore(),
						detail: {
							...data.result.properties,
							description: data.result.description,
							uid: data.result.uid
						}
					})
				}catch (error){
					console.log("Error fetching vehicle", error)
				}
			},
			cleanDetail: () => {
				setStore({ ...getStore(), detail: null })
			},
			addFavorites: (name) => {
				const store = getStore()
				if(!store.favorites.includes(name)){
					setStore({favorites: [...store.favorites, name]})
				}
			},
			deleteFavorites: (index) => {
				const store = getStore()
				const newFavorites = store.favorites.filter((_, i) => i !== index)
				setStore({favorites: newFavorites})
			},
			setSelectedCategory: (index) =>{
				setStore({selectedCategory: index})
			},
			setSelectedCategoryName: (name) => {
				setStore({selectedCategoryName: name})
			}
		}
	};
};

export default getState;
