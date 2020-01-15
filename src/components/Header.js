import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="nav">

                <NavLink className="link" to="/">Inicio</NavLink>
                <NavLink className="link" to="/create">Crear tarea</NavLink>

            </nav>
        );
    }
}

export default Header;