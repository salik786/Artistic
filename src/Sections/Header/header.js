import React from 'react'
import { Link } from "react-router-dom"
import "./header.css"
function Header() {
    return (
        <div>
            <section class="header-section ">
                <div className="row">
                    <div class="left-div col-4">
                        <h1 class="banner-text">
                            A Platform For Detection and Analyzing of Hate Speeches On Twitter
                        </h1>
                        <p class="banner-text-p">
                            A Platform For Detection and Analyztion of of Hate Speeches On Twitter Specifically in Roman Urdu.Bring Your data here we will help you out
                        </p>
                        <button className="btn-started">
                            <span className="btn-started-link" to="register">Getting Started</span>
                        </button>
                    </div>
                    <div class="right-div col-6">
                        <img src="https://i.ibb.co/W5Ss3zj/Pngtree-2-5d-blue-internet-technology-illustration-3688749.png" alt="Pngtree-2-5d-blue-internet-technology-illustration-3688749" border="0"></img>

                    </div>
                </div >
            </section >

        </div >
    )
}
export default Header
