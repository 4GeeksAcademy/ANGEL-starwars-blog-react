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
                    <p>{details.opening_crawl ? details.opening_crawl : details.description}</p>
                </div>
            </div>
            <div className="second-details">
                {details.title && <div>
                    <h3>Title</h3>
                    <p>{details.title}</p>
                </div>}
                {details.producer && <div>
                    <h3>Producer</h3>
                    <p>{details.producer}</p>
                </div>}
                {details.director && <div>
                    <h3>Director</h3>
                    <p>{details.director}</p>
                </div>}
                {details.release_date && <div>
                    <h3>Release date</h3>
                    <p>{details.release_date}</p>
                </div>}
                
                {details.height && <div>
                    <h3>Height</h3>
                    <p>{details.height}</p>
                </div>}
                {details.mass && <div>
                    <h3>Mass</h3>
                    <p>{details.mass}</p>
                </div>}
                {details.hair_color && <div>
                    <h3>Hair color</h3>
                    <p>{details.hair_color}</p>
                </div>}
                {details.skin_color && <div>
                    <h3>Skin color</h3>
                    <p>{details.skin_color}</p>
                </div>}
                {details.birth_year && <div>
                    <h3>Birth year</h3>
                    <p>{details.birth_year}</p>
                </div>}
                {details.gender && <div>
                    <h3>Gender</h3>
                    <p>{details.gender}</p>
                </div>}

                {details.diameter && <div>
                    <h3>Diameter</h3>
                    <p>{details.diameter}</p>
                </div>}
                {details.rotation_period && <div>
                    <h3>Rotation period</h3>
                    <p>{details.rotation_period}</p>
                </div>}
                {details.orbital_period && <div>
                    <h3>Orbital period</h3>
                    <p>{details.orbital_period}</p>
                </div>}
                {details.gravity && <div>
                    <h3>Gravity</h3>
                    <p>{details.gravity}</p>
                </div>}
                {details.climate && <div>
                    <h3>Climate</h3>
                    <p>{details.climate}</p>
                </div>}
                {details.population && <div>
                    <h3>Population</h3>
                    <p>{details.population}</p>
                </div>}

                {details.designation && <div>
                    <h3>Designation</h3>
                    <p>{details.designation}</p>
                </div>}
                {details.average_height && <div>
                    <h3>Average height</h3>
                    <p>{details.average_height}</p>
                </div>}
                {details.population && <div>
                    <h3>Population</h3>
                    <p>{details.population}</p>
                </div>}
                {details.classification && <div>
                    <h3>Classification</h3>
                    <p>{details.classification}</p>
                </div>}
                {details.hair_colors && <div>
                    <h3>Hair colors</h3>
                    <p>{details.hair_colors}</p>
                </div>}
                {details.skin_colors && <div>
                    <h3>Skin colors</h3>
                    <p>{details.skin_colors}</p>
                </div>}

                {details.model && <div>
                    <h3>Model</h3>
                    <p>{details.model}</p>
                </div>}
                {details.starship_class && <div>
                    <h3>Starship class</h3>
                    <p>{details.starship_class}</p>
                </div>}
                {details.manufacturer && <div>
                    <h3>Manufacturer</h3>
                    <p>{details.manufacturer}</p>
                </div>}
                {details.cost_in_credits && <div>
                    <h3>Cost</h3>
                    <p>{details.cost_in_credits}</p>
                </div>}
                {details.MGLT && <div>
                    <h3>MGLT</h3>
                    <p>{details.MGLT}</p>
                </div>}
                {details.passengers && <div>
                    <h3>Passengers</h3>
                    <p>{details.passengers}</p>
                </div>}
                {details.consumables && <div>
                    <h3>Consumables</h3>
                    <p>{details.consumables}</p>
                </div>}

                {details.vehicle_class && <div>
                    <h3>Vehicle class</h3>
                    <p>{details.vehicle_class}</p>
                </div>}
                
            </div>
        </div>
    )
}