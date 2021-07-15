import React from 'react'
import {BsChevronRight} from "react-icons/bs"
import {FiArrowRight} from "react-icons/fi"

export default function Navbar() {
    return (
        <nav className="container width">
            <a href="#" className="logo">SB UI Kit Pro</a>
            <div className="rgt">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Landings <BsChevronRight/></a></li>
                <li><a href="#">Pages <BsChevronRight/></a></li>
                <li><a href="#">Documentations <BsChevronRight/></a></li>
            </ul>
            <button className="btn btn-primary">Buy Now <FiArrowRight/></button>
            </div>
        </nav>
    )
}
