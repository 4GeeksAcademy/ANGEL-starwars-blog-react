import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export function Card({id, name, url}) {

    const { actions } = useContext(Context)

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
            <div className="card-buttons">
                <button onClick={handleLearnMore}>Learn more</button>
                <button onClick={(e => {
                    e.stopPropagation(),
                    actions.addFavorites(name)
                })}>❤</button>
            </div>
        </div>
    )
}