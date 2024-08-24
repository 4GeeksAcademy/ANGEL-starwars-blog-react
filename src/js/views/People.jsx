import React, { useContext, useEffect } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";

export default function People() {

    const {store} = useContext(Context)

    return(
        <div className="cards">
            {store.people.map((item, index) => {
                return(
                    <Card
                    key={index}
                    name={item.name}
                    id={item.uid}
                    url={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                    />
                )
            })}
        </div>
    )
}