import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export default function Species() {

    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getSpecies()
    },[])

    return(
        <div className="cards">
            {store.species.map((item) => {
                return(
                    <Card
                    key={item.uid}
                    name={item.name}
                    id={item.uid}
                    url={`https://starwars-visualguide.com/assets/img/species/${item.uid}.jpg`}
                    />
                )
            })}
        </div>
    )
}