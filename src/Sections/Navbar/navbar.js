import React from "react";
// import logo from "../../../public/logoimg.png"
import "./navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  " style={{ backgroundColor: "white", borderBottom: "5px solid #0B5ED7" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" ><span>
                        {/* <img src="https://i.ibb.co/tsq2Jkr/Untitled-design-3.png" alt="Untitled-design-3" height="35" width="35" border="0" /> */}
                    </span ><span className="logo">Artistic</span></a>
                    <button className="navbar-toggler collapsed ms-auto float-xs-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon " ></span>
                    </button>

                    <div className="collapse navbar-collapse collapsed " id="navbarTogglerDemo01">


                        <ul className="navbar-nav mb-2 ms-auto">
                            <li className="nav-item ">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Search Artists</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="search" className="nav-link active" href="#">Search Artists</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="favourite" className="nav-link" href="#">Favourites</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link">Help</a>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;