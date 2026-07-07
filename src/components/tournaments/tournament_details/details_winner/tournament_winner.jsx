import React from 'react'
import { RiVipCrownLine } from "react-icons/ri";
import './tournament_winner.css'

const TournamentWinner = ({playerEntry}) => {
    const getFormattedRecord = (recordEntry) =>{
        return recordEntry.wins + "-" + recordEntry.losses + "-" + recordEntry.ties;
    }

  return (
    <div className='winner-container'>
        <div className="winner-icon-container">
            <RiVipCrownLine className='winner-icon'/>
        </div>
        <div className="winner-info-container">
            <div className="winner-tag">
                <p>CAMPEÃO</p>
            </div>
            <div className="winner-name">
                {!playerEntry? <p>FULANO J.</p> : <p>{playerEntry.name}</p>} 
            </div>
            <div className="winner-info">
                {!playerEntry? <p>Country</p> : <p>{playerEntry.country}</p>} 
                <p>-</p>
                {!playerEntry? <p>Deck</p> : <p>{playerEntry.deck.name}</p>} 
                <p>-</p>
                {!playerEntry? <p>Placar</p> : <p>{getFormattedRecord(playerEntry.record)}</p>} 
            </div>
        </div>
    </div>
  )
}

export default TournamentWinner