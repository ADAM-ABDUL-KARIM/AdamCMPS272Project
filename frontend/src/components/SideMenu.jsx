import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/SideMenu.css";

function SideMenu() {
    const [isOpen, setIsOpen] = useState(true);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleTouchOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("touchstart", handleTouchOutside);
        return () => {
            document.removeEventListener("touchstart", handleTouchOutside);
        };
    }, []);

    return (
        <div>
            <div ref={menuRef} className={`side-menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/notes">Notes</Link></li>
                    <li><Link to="/viewrecords">View Records</Link></li>
                    <li><Link to="/writerecords">Write Records</Link></li>
                    <li><Link to="/registerhealthpro">Register Healthcare Professional</Link></li>
                    <li><Link to="/appointments">Appointments</Link></li>
                    <li><Link to="/availability">Availability</Link></li>
                    <li><Link to="/export">Export Patients</Link></li>
                </ul>
            </div>
            <div className="burger-icon" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default SideMenu;