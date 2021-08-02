import React from 'react'
import './Header.css';

interface headerProps{
    user: string | null;
}

function Header({ user} : headerProps) {
    return (
        <div className = "Header-container">
            <form>
                <input className = "Search-box" placeholder = "Search..." type = "text"/>
            </form>
        </div>
    )
}

export { Header };
