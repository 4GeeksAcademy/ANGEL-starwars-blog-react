import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import "../../styles/home.css";
import { Header } from "../component/Header.jsx"
import Sidebar from "../component/Sidebar.jsx";
import { Context } from "../store/appContext.js";
import { SidebarItem } from "../component/Sidebar.jsx";
import People from "./People.jsx";
import Planet from "./Planet.jsx";
import Film from "./Film.jsx";
import Details from "./Details.jsx";
import Species from "./Species.jsx";
import StarShip from "./Starship.jsx";
import Vehicle from "./Vehicle.jsx";

export function Home() {

	const navigate = useNavigate()


	const {store, actions} = useContext(Context)

	useEffect(() => {
		actions.getPeople()
		actions.getCategories()
	},[])

	useEffect(() => {
        const pathToCategoryMap = {
            "/films": 0,
            "/people": 1,
            "/planets": 2,
			"/species": 3,
			"/starships": 4,
			"/vehicles": 5,
        };

        const currentPath = location.pathname
        const categoryIndex = pathToCategoryMap[currentPath]

        if (categoryIndex !== undefined) {
            actions.setSelectedCategory(categoryIndex)
        }
    }, [location.pathname])

	const handleClickCategories = (category, index) => {
		navigate(`/${category}`)
		actions.setSelectedCategory(index)
	}
	

	return(
		<>
			<header className="header">
				<Header/>
			</header>
			<main className="main">
				<Sidebar>
					{store.categories.map((item, index) => {
						return(
							<SidebarItem
							key={index}
							category={item.toUpperCase()}
							onClick={() => handleClickCategories(item, index)}
							active={store.selectedCategory === index}
							/>
						)
					})}
				</Sidebar>
				<section className="card-container">
					<Routes>
						<>
							<Route path="/" element={<Navigate to="/films" />} />
							<Route path="/planets" element={<Planet/>}/>
							<Route path="/people" element={<People/>}/>
							<Route path= "/details/:id" element={<Details/>}/>
							<Route path="/films" element={<Film/>}/>
							<Route path="/species" element={<Species/>}/>
							<Route path="/starships" element={<StarShip/>}/>
							<Route path="/vehicles" element={<Vehicle/>}/>
						</>
					</Routes>
				</section>
			</main>
		</>
	)
}