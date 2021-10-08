import React from 'react'
import './topbar.css'
import { FiUser } from "react-icons/fi";
export default function TopBar() {
    return (
        <div className="topbar">
            <img className="logo" src="images/Logo.JPG"></img>
            <FiUser className= 'userIcon'></FiUser>
        </div>
    )
}
