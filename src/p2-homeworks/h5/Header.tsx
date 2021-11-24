import React from 'react'
import './header.css';
import {NavLink as Link} from "react-router-dom";
import {PATH} from "./RoutesHW";

function Header() {

    return (
        <div className="menu">
            <nav className="menu__nav">
                <ul className="menu__list">
                    <li>
                        <Link to={PATH.PRE_JUNIOR} className="menu__link">Pre-Junior</Link>
                    </li>
                    <li>
                        <Link to={PATH.JUNIOR} className="menu__link">Junior</Link>
                    </li>
                    <li>
                        <Link to={PATH.JUNIOR_PLUS} className="menu__link">Junior+</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
