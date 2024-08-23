import React, { useContext } from "react";
import { Context } from "../store/appContext";

export default function DetailCard({details}) {
    const {store} = useContext(Context)

    const categoryImg = store.categories[store.selectedCategory]

    return(
        <div className="detail-card">
            <div className="first-details">
                <div>
                    <img src={`https://starwars-visualguide.com/assets/img/${categoryImg === "people" ? "characters" : categoryImg}/${details.uid}.jpg`}/>
                </div>
                <div className="first-details-text">
                    <h3>{details.name}</h3>
                    <p>{details.description}</p>
                </div>
            </div>
            <div className="second-details">
                {details.name && <div>
                    <h3>Name</h3>
                    <p>{details.name}</p>
                </div>}
                {details.name && <div>
                    <h3>Bird Year</h3>
                    <p>{details.birth_year}</p>
                </div>}
                {details.name && <div>
                    <h3>Gender</h3>
                    <p>{details.gender}</p>
                </div>}
                {details.name && <div>
                    <h3>Height</h3>
                    <p>{details.height}</p>
                </div>}
                {details.name && <div>
                    <h3>Skin Color</h3>
                    <p>{details.skin_color}</p>
                </div>}
                {details.name && <div>
                    <h3>Eye color</h3>
                    <p>{details.eye_color}</p>
                </div>}
                {details.producer && <div>
                    <h3>Producer</h3>
                    <p>{details.producer}</p>
                </div>}
            </div>
        </div>
    )
}