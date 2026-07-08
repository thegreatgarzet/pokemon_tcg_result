import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import './top_table_entry.css'
import DecklistDisplay from '../top_table_decklist/decklist_display/decklist_display';

const TopTableEntry = ({ tournamentID, playerEntry }) => {

  const [expanded, setExpanded] = useState(false);

  const getFormattedRecord = (recordEntry) => {
    return recordEntry.wins + "-" + recordEntry.losses + "-" + recordEntry.ties;
  }

  const openPlayerProfileURL = () => {

    window.open(`https://play.limitlesstcg.com/tournament/${encodeURIComponent(tournamentID)}/player/${encodeURIComponent(playerEntry.player)}/decklist`, '_blank', 'noopener,noreferrer');
  }

  return (
    <div >
      <div className={`top-table-entry ${expanded?'expanded':''}`} onClick={() => setExpanded(!expanded)}>
        <div className="table-entry-arrow display-flex-row">
          {!playerEntry ? <p></p> : expanded? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
        <div className="table-entry-placing display-flex-row">
          {!playerEntry ? <p>#</p> : <p>{playerEntry.placing}</p>}
        </div>
        <div className="table-entry-player-name display-flex-row">
          {!playerEntry ? <p>Jogador</p> : <p>{playerEntry.name}</p>}
        </div>
        <div className="table-entry-country display-flex-row">
          {!playerEntry ? <p>Pais</p> : <p>{playerEntry.country}</p>}
        </div>
        <div className="table-entry-deck-name display-flex-row">
          {!playerEntry ? <p>Deck</p> : <p>{playerEntry.deck.name}</p>}
        </div>
        <div className="table-entry-record display-flex-row">
          {!playerEntry ? <p>Placar</p> : <p>{getFormattedRecord(playerEntry.record)}</p>}
        </div>
      </div>
      <div>
        {expanded ? <DecklistDisplay player={playerEntry} openListLink={openPlayerProfileURL} /> : <div></div>}
      </div>
      </div>
  )
}

export default TopTableEntry