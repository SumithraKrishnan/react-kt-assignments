import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div> 
            {/* // Routes for navigation links
            <nav>
                <NavLink to="/" style={({isActive})=>({
                 color: isActive? "blue" : "Black"
                })}>
                    Home</NavLink>
                <NavLink to="/about" style={({isActive})=>({
                 color: isActive? "blue" : "Black"
                })}>About</NavLink>
                
                <NavLink to="/contact" style={({isActive})=>({
                 color: isActive? "blue" : "Black"
                })}>Contact</NavLink>

            </nav> */}
            <nav>
                <NavLink to="/" style={({isActive})=>({
                 color: isActive? "blue" : "Black"
                })}>Posts</NavLink>
                <NavLink to="/users" style={({isActive})=>({
                 color: isActive? "blue" : "Black"
                })}>Users</NavLink>
                
                <NavLink to="/todos" style={({isActive})=>({
                 color: isActive? "blue" : "Black"
                })}>Todos</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;