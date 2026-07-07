import React, { useState } from 'react'
import './tournament_entry.css'
import { LuCalendarDays } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";

const TournamentEntry = ({tournament, handleTournamentSelected}) => {
    const [tournamentEntry, setTournamentEntry] = useState(tournament);
    const date = new Date(tournamentEntry.date);
  return (
    <div className='tournament-entry' onClick={() => handleTournamentSelected(tournament)}>
        <div className="listing-entry-title">
            <p>{tournamentEntry.name}</p>
        </div>
        <div className="listing-entry-info">
            <LuCalendarDays/>
            <p>{date.toLocaleDateString('pt-BR', {day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC'})}</p>
            <RxPeople/>
            <p>{tournamentEntry.players}</p>
            <div className="tournament-format">
                <p>{tournamentEntry.format}</p>
            </div>
        </div>
    </div>
  )
}

export default TournamentEntry