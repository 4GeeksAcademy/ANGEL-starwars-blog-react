import React from "react";
import "../../styles/home.css";

export function Header(){
	return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between">
                <div>
                    <a className="navbar-brand text-dark" href="#">Navbar</a>
                </div>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Empty</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
