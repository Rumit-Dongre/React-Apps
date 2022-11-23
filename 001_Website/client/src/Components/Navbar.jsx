import React from 'react'
import './css/navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="left">
                    <h2> poetic </h2>
                </div>

                <div className="right">
                    <ul>
                        <li>Process</li>
                        <li>Products</li>
                        <li>Jobs</li>
                        <li>Contact</li>
                    </ul>

                </div>

            </nav>
        </>
    )
}

export default Navbar