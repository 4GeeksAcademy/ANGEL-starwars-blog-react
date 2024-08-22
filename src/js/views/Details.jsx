import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../component/DetailCard.jsx";
import { Context } from "../store/appContext.js";

export default function Details() {

    const { id } = useParams()

    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getPeopleDetail(id)
    },[id])
    

    return(
        <div className="detail-container">
            {store.characterDetail ? <DetailCard character={store.characterDetail}/> : "Loading..."}
        </div>
    )
}