import React, { useContext, useEffect } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";

export default function StarShip() {

    const {store} = useContext(Context)

    return(
        <div className="cards">
            {store.starship.map((item, index) => {
                return(
                    <Card
                    key={index}
                    name={item.name}
                    id={item.uid}
                    url={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`}
                    />
                )
            })}
        </div>
    )
}