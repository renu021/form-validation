import React from "react"
import "./NavStyle.css";
import {Link} from "react-router-dom"

const Nav = () => {
    return(
        <div className="Nav-container">
            <div className="logo">
            <Link to="/Home"><span className="logoText1">empower</span><span className="logoText2">-employment</span></Link>
            </div>

            <div className="menus">
                <ul className="menu-btn">
                    <li  className="btn">
                        <Link to="/Register">Register</Link>
                    </li>

                    <li  className="btn">
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
export default Nav;