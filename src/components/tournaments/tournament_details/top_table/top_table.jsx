import React from 'react'
import { GrTrophy } from "react-icons/gr";
import TopTableEntry from './top_table_entry/top_table_entry';
import TopTableHeader from './top_table_entry/top_table_header';
import './top_table.css'

const TopTable = ({players, tournamentID}) => {
  return (
    <div className='top-table-container'>
        <div className="top-table-title">
            <GrTrophy className='top-table-title-icon'/>
            <p>TOP 8</p>
        </div>
        <TopTableHeader/> {/* VAZIA / TOPO DA TABELA */}
        {players.slice(0,8).map((playerEntry => (<TopTableEntry key={playerEntry.player} tournamentID={tournamentID} playerEntry={playerEntry}/>)))}
    </div>
  )
}

export default TopTable