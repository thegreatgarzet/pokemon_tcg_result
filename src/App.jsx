import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/header'
import Filter from './components/filter/filter'
import TournamentListing from './components/tournaments/tournament_listing/tournament_listing'
import TournamentDetails from './components/tournaments/tournament_details/tournament_details'
import EmptyTournament from './components/tournaments/tournament_details/empty_tournament/empty_tournament'

function App() {
  const [sizeFilter, setSizeFilter] = useState(80);
  const [fetchedTournaments, setFetchedTournaments] = useState(null);
  const [currentTournamentData, setCurrentTournamentData] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);

  const setupTournamentData = (tournament) =>{
    return {id: tournament.id, details: tournament, winner: null, players:null}
  }

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const responseFetch = await fetch('https://play.limitlesstcg.com/api/tournaments?game=ptcg&format=standard&limit=50');

        const jsonRes = await responseFetch.json();

        if (!responseFetch.ok) {
          console.log("Erro durante request");

          setFetchedTournaments([]);

          return;
        }

        console.log(jsonRes)
        const filteredJson = jsonRes.filter((entry) => entry.players >=80);
        setFetchedTournaments(filteredJson);
      } catch (error) {
        setFetchedTournaments([]);
        console.log("Falha na req: ", error);
      }
    };

    fetchTournaments();
  }, []);
  
  const handleTournamentSelected = async (tournamentEntry) =>{
    if(currentTournamentData && currentTournamentData.some(entry => entry.id === tournamentEntry.id)){
      setSelectedTournament(currentTournamentData.find(entry => entry.id == tournamentEntry.id));
    }else{
      const newData = setupTournamentData(tournamentEntry);
      
      const allPlayers = await getPlayersData(tournamentEntry);
  
      const sortedPlayers = allPlayers.filter(entry => entry.placing !== null).sort((a,b) => a.placing - b.placing);

      newData.players = sortedPlayers;
      newData.winner = sortedPlayers[0];

      setCurrentTournamentData([...currentTournamentData, newData]);

      setSelectedTournament(newData);
    }
  }

  useEffect(() => {
    console.log(currentTournamentData);
}, [currentTournamentData]);

  const getPlayersData = async (tournamentEntry) =>{
    try {
      const responseFetch = await fetch(`https://play.limitlesstcg.com/api/tournaments/${tournamentEntry.id}/standings`);

      const jsonRes = await responseFetch.json();

      return jsonRes;
    } catch (error) {
      
    }
  }

  return (
    <div className='app-body'>
      <Header/>
      <Filter filter={sizeFilter} setFilter={setSizeFilter}/>
      <div className="tournament-display-area">
        <TournamentListing tournaments={fetchedTournaments} handleTournamentSelected={handleTournamentSelected} currentFilter={sizeFilter} currentTournament={selectedTournament}/>
        {!selectedTournament ? <EmptyTournament/>:<TournamentDetails tournamentDetails={selectedTournament}/>}
      </div>
    </div>
  )
}

export default App
