import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './top_table_entry.css'

const TopTableHeader = () => {
  return (
    <div className='top-table-entry-header'>
            <div className="table-entry-arrow display-flex-row">
            </div>
            <div className="table-entry-placing display-flex-row">
              <p>#</p>
            </div>
            <div className="table-entry-player-name display-flex-row">
              <p>Jogador</p>
            </div>
            <div className="table-entry-country display-flex-row">
              <p>Pais</p>
            </div>
            <div className="table-entry-deck-name display-flex-row">
              <p>Deck</p>
            </div>
            <div className="table-entry-record display-flex-row">
              <p>Placar</p>
            </div>
          </div>
  )
}

export default TopTableHeader