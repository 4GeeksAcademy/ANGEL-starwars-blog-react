import React from "react";

export default function Sidebar({children}){
    return(
        <aside className="aside">
            <nav className="aside-nav">
                <ul>{children}</ul>
            </nav>
        </aside>
    )
}

export function SidebarItem({category, onClick}){
    return(
        <li onClick={onClick}>{category}</li>
    )
}