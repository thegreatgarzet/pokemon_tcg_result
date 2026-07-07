import React, { useState, useEffect } from 'react'
import styles from './tournament_entry_header.module.css'
import { LuCalendarDays } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";

const TournamentEntryHeader = ({tournament}) => {
    const date = new Date(tournament.details.date);

  return (
    <div className={styles['tournament-entry']}>
        <div className={styles["listing-entry-title"]}>
            <p>{tournament.details.name}</p>
        </div>
        <div className={styles["listing-entry-info"]}>
            <LuCalendarDays/>
            <p>{date.toLocaleDateString('pt-BR', {day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC'})}</p>
            <RxPeople/>
            <p>{tournament.details.players}</p>
            <div className="tournament-format">
                <p>{tournament.details.format}</p>
            </div>
        </div>
    </div>
  )
}

export default TournamentEntryHeader