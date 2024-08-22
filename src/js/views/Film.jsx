import React, { useContext, useEffect } from "react";
import { Card } from "../component/Card.jsx"
import { Context } from "../store/appContext"

export default function Film(){

    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getFilm()
    },[])
    
    return(
        <div className="cards">
            {store.film.map((item,index) => {
                return(
                    <Card
                    key={index}
                    name={item.properties.title}
                    url={`https://starwars-visualguide.com/assets/img/films/${item.uid}.jpg`}
                    />
                )
            })}
        </div>
    )
}