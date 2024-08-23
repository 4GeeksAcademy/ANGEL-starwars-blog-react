import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../component/DetailCard.jsx";
import { Context } from "../store/appContext.js";

export default function Details() {

    const { id } = useParams()
    const {store, actions} = useContext(Context)


    useEffect(() => {

        const category = store.categories[store.selectedCategory]
        console.log(category)
        if (category === "people") {
            actions.getPeopleDetail(id);
        } else if (category === "planets") {
            actions.getPlanetDetail(id);
        } else if (category === "films") {
            actions.getFilmDetail(id);
        }else if (category === "species") {
            actions.getSpeciesDetail(id);
        }else if(category === "starships"){
            actions.getStarShipDetail(id)
        }else if (category === "vehicles"){
            actions.getVehicleDetail(id)
        }

        return () => {
            actions.cleanDetail()
        }
    },[store.selectedCategory, id])
    
    return(
        <div className="detail-container">
            {store.detail ? <DetailCard details={store.detail}/> : "Loading..."}
        </div>
    )
}