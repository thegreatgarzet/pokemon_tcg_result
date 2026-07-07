import React from 'react'
import './header.css'
import { GrTrophy } from "react-icons/gr";

const Header = () => {
  return (
    <div className="header-container">
        <div className='header'>
                <div className='header-icon-container'>
                    <GrTrophy className='header-icon'/>
                </div>
                <div className='header-title'>
                    <h2>Pokemon TCG Results</h2>
                    <p>Limitless Online Tournaments Latest Results</p>
                </div>
            </div>
    </div>
  )
}

export default Header