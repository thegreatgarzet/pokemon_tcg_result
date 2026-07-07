import React from 'react'
import './tournament_details.css'
import TournamentEntryHeader from './details_header/tournament_entry_header'
import TournamentWinner from './details_winner/tournament_winner'
import TopTable from './top_table/top_table'
import TournamentGraph from './tournmanet_graph/tournament_graph'

const TournamentDetails = ({tournamentDetails}) => {
  return (
    <div className='tournament-details'>
      <TournamentEntryHeader tournament={tournamentDetails}/>
      <TournamentWinner playerEntry={tournamentDetails.winner}/>
      <TopTable tournamentID={tournamentDetails.id} players={tournamentDetails.players}/>
      <TournamentGraph tournamentDetails={tournamentDetails}/>
    </div>
  )
}

export default TournamentDetails