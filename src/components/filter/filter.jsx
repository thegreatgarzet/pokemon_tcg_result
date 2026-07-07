import React, { useState } from 'react'
import './filter.css'
import { RxPeople } from "react-icons/rx";

const Filter = ({filter, setFilter}) => {

    return (
        <div className="filter-body">
            <div >
                <RxPeople className="players-icon"/>
            </div>
            <p>Min. Jogadores</p>
            <div className="filter-buttons-container">
                <button value={filter} onClick={()=>setFilter(80)} className={`filter-button ${filter === 80?'active':''}`}>80</button>
                <button value={filter} onClick={()=>setFilter(150)} className={`filter-button ${filter === 150?'active':''}`}>150</button>
                <button value={filter} onClick={()=>setFilter(500)} className={`filter-button ${filter === 500?'active':''}`}>500+</button>
            </div>
        </div>
    )
}

export default Filter