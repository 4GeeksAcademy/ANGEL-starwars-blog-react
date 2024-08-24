import React, { useContext } from "react";
import { Trash2 } from "lucide-react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Search } from "./Search.jsx";

export function Header(){
    const { store, actions } = useContext(Context)

    const handleClickDelete = (index) => {
        actions.deleteFavorites(index)
    }
   
	return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
            <div className="container-fluid d-flex justify-content-between pe-5">
                <div>
                    <a className="navbar-brand text-dark" href="#"><img className="logo" src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"/></a>
                </div>
                <Search/>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light fw-bolder" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favoritos
                            </a>
                            <ul className="dropdown-menu">
                                {store.favorites.length > 0 ? (
                                    store.favorites.map((item,index) => (
                                            <li 
                                            key={index}
                                            className="dropdown-item drop-li" href="#"
                                            >
                                                {item}
                                            <Trash2 onClick={(e) => {e.stopPropagation(), handleClickDelete(index)}}/>
                                            </li>
                                    ))
                                    ): (
                                        <li><a className="dropdown-item" href="#">Empty</a></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
