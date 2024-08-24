import React, { useContext, useEffect } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";

export default function Planet() {

    const {store} = useContext(Context)

    return(
        <div className="cards">
            {store.planet.map((item, index) => {
                return(
                    <Card
                    key={index}
                    name={item.name}
                    id={item.uid}
                    url={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                    />
                )
            })}
        </div>
    )
}