import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/Home.jsx";
import People from "./views/People.jsx";
import Planet from "./views/Planet.jsx";
import Details from "./views/Details.jsx";
import Film from "./views/Film.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<Home />}>
							<Route path="/people" element={<People/>} />
							<Route path="/planets" element={<Planet/>} />
							<Route path="/details/:id" element={<Details/>}/>
							<Route path="/films" element={<Film/>}/>
						</Route>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
	);
};

export default (Layout);
