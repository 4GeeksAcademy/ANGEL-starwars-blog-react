import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Header } from "../component/Header.jsx"
import Sidebar from "../component/Sidebar.jsx";
import { Context } from "../store/appContext.js";
import { SidebarItem } from "../component/Sidebar.jsx";
import People from "./People.jsx";
import Planet from "./Planet.jsx";
import Film from "./Film.jsx";
import Details from "./Details.jsx";

export function Home() {

	const navigate = useNavigate()

	const {store, actions} = useContext(Context)

	useEffect(() => {
		actions.getPeople()
		actions.getCategories()
	},[])

	const handleClickCategories = (category) => {
		navigate(`/${category}`)
	}

	return(
		<>
			<header>
				<Header/>
			</header>
			<main className="main">
				<Sidebar>
					{store.categories.map((item, index) => {
						return(
							<SidebarItem
							key={index}
							category={item}
							onClick={() => handleClickCategories(item)}
							/>
						)
					})}
				</Sidebar>
				<section className="card-container">
					<Routes>
						<>
							<Route path="/planets" element={<Planet/>}/>
							<Route path="/people" element={<People/>}/>
							<Route path= "/details/:id" element={<Details/>}/>
							<Route path="/films" element={<Film/>}/>
						</>
					</Routes>
				</section>
			</main>
		</>
	)
}