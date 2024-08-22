import React from "react";

export default function DetailCard({character}) {
    return(
        <div className="detail-card">
            <div className="first-details">
                <div>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}/>
                </div>
                <div>
                    <h3>{character.name}</h3>
                    <p>{character.description}</p>
                </div>
            </div>
            <div className="second-details">
                <div>
                    <h3>Name</h3>
                    <p>{character.name}</p>
                </div>
                <div>
                    <h3>Bird Year</h3>
                    <p>{character.birth_year}</p>
                </div>
                <div>
                    <h3>Gender</h3>
                    <p>{character.gender}</p>
                </div>
                <div>
                    <h3>Height</h3>
                    <p>{character.height}</p>
                </div>
                <div>
                    <h3>Skin Color</h3>
                    <p>{character.skin_color}</p>
                </div>
                <div>
                    <h3>Eye color</h3>
                    <p>{character.eye_color}</p>
                </div>
            </div>
        </div>
    )
}