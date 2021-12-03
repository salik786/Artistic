import React from "react";
// import logo from "../../../public/logoimg.png"
import "./navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg  " style={{ backgroundColor: "white", borderBottom: "5px solid #0B5ED7" }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" ><span>
                        {/* <img src="https://i.ibb.co/tsq2Jkr/Untitled-design-3.png" alt="Untitled-design-3" height="35" width="35" border="0" /> */}
                    </span ><span className="logo">Artistic</span></a>
                    <button class="navbar-toggler collapsed ms-auto float-xs-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon " ></span>
                    </button>

                    <div class="collapse navbar-collapse collapsed " id="navbarTogglerDemo01">


                        <ul class="navbar-nav mb-2 ms-auto">
                            <li class="nav-item">
                                <Link to="/" class="nav-link" aria-current="page" href="#">Search Artists</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link to="search" class="nav-link active" href="#">Search Artists</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link to="favourite" class="nav-link" href="#">Favourites</Link>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link">Help</a>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;