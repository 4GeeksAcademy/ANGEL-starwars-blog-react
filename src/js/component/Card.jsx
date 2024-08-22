import React from "react";
import { useNavigate } from "react-router-dom";

export function Card({id, name, url}) {

    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate(`/details/${id}`)
    }

    return(
        <div className="card-component">
            <div className="card-img">
                <img src={url}/>
            </div>
            <div className="card-text">
                <p>{name}</p>
            </div>
            <div>
                <button onClick={handleLearnMore}>Learn more</button>
                <button>❤</button>
            </div>
        </div>
    )
}