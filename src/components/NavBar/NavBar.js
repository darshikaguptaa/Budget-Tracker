import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Budget Tracker</Link>
            <ul>
                <Link to="/income">Income</Link>
                <Link to="/expense">Expenditure</Link>
            </ul>
        </nav>
    );
};

export default NavBar;
