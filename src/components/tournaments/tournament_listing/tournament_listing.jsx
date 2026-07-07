import React, { useState, useEffect } from 'react'
import './tournament_listing.css'
import { LuActivity } from "react-icons/lu";
import TournamentEntry from "../tournament_entry/tournament_entry"
import TournamentEntryHeader from '../tournament_details/details_header/tournament_entry_header';

const TournamentListing = ({tournaments, handleTournamentSelected, currentFilter}) => {

  return (
    <div className='tournament_listing'>
      <div className='listing-header'>
        <LuActivity className='listing-icon'/> 
        <p>TORNEIOS RECENTES: {tournaments ? tournaments.filter((entry) => entry.players >= currentFilter).length : "Carregando..."}</p>
      </div>
      {tournaments ? tournaments.filter((entry) => entry.players >= currentFilter).map((entry) =>(
        <TournamentEntry key={entry.id} tournament={entry} handleTournamentSelected={handleTournamentSelected}/>
      )) : <></>}
    </div>
  )
}

export default TournamentListing