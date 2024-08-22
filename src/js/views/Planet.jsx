import React, { useContext, useEffect } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";


export default function Planet() {

    const {store, actions} = useContext(Context)

	useEffect(() => {
		actions.getPlanet()
	},[])

    return(
        <div className="cards">
            {store.planet.map((item, index) => {
                return(
                    <Card
                    key={index}
                    name={item.name}
                    />
                )
            })}
        </div>
    )
}