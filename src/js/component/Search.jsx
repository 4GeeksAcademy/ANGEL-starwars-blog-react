import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export function Search() {
    const { store, actions } = useContext(Context);
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    const navigate = useNavigate()

    const handleListClick = (id,categoryName) => {
        actions.setSelectedCategoryName(categoryName);
        const categoryIndex = store.categories.indexOf(categoryName);
        if (categoryIndex !== -1) {
            actions.setSelectedCategory(categoryIndex);
        }
        navigate(`details/${id}`)
    }

    useEffect(() => {
        if (query === "") {
            setFilteredResults([]);
            return
        }

        const allItems = [
            { category: "people", items: store.people },
            { category: "planet", items: store.planet },
            { category: "species", items: store.species },
            { category: "starship", items: store.starship },
            { category: "vehicle", items: store.vehicle },
        ]


        const results = allItems.flatMap(group => 
            group.items
                .filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
                .map(item => ({ ...item, category: group.category }))
        )

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
                    <li 
                    key={index}
                    onClick={() => handleListClick(item.uid, item.category)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}