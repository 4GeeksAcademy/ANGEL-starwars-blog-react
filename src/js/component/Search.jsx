import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export function Search() {
    const { store } = useContext(Context);
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        if (query === "") {
            setFilteredResults([]);
            return;
        }

        const allItems = [
            ...store.people,
            ...store.planet,
            ...store.species,
            ...store.starship,
            ...store.vehicle,
        ];

        const results = allItems.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredResults(results);
    }, [query, store]);

    return (
        <div className="search-container">
            <input 
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul className="search-results">
                {filteredResults.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}