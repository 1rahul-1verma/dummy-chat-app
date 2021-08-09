import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Header.css';


function Header() {
    const user = useContext(UserContext);
    return (
        <div className = "Header-container">
            <form>
                <input className = "Search-box" placeholder = "Search..." type = "text"/>
            </form>
        </div>
    )
}

export { Header };
