import '../styles/navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }
    return (
        <div className="navbar">
            <div className="topnav" id="myTopnav">
                <NavLink to="/" className="navbar_logo">Jane N.</NavLink>
                <div className="navbar_menu">
                <NavLink to="/about">About</NavLink>
                    <div class="dropdown">
                        <button className="dropbtn">Work<i className="fa fa-caret-down"></i></button>
                        <div className="dropdown-content">
                        <NavLink to="/uiux">Design</NavLink>
                        <NavLink to="/coding">Coding</NavLink>
     
                        </div>
                    </div>
                </div>
                <a href="javascript:void(0);" className="icon" onClick={myFunction}>&#9776;</a>
            </div>
        </div>
    )
    }
}

export default Navbar