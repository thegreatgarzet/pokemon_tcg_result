import React, { useState, useEffect } from 'react'
import HorizontalBarChart from '../../../charts/HorizontalBarChart';

import './tournament_graph.css'

const TournamentGraph = ({tournamentDetails}) => {
    
    const [graphInfo, setGraphInfo] = useState(null);

    const tempData = [
        { name: "Carregando", value: 100 }
    ];

    useEffect(() => {
        var newDictionary = {};

        tournamentDetails.players.map((entry) => {
            if(!newDictionary[entry.deck.name]){
                newDictionary[entry.deck.name] = 1;
            }else{
                newDictionary[entry.deck.name] = newDictionary[entry.deck.name]+1;
            }
        });
        
        var sortedDictionary = Object.fromEntries(Object.entries(newDictionary).sort(([,a],[,b]) => b - a).slice(0,8));

        const chartData = Object.entries(sortedDictionary).map(([name, value]) => ({
            name,
            value,
        }));

        setGraphInfo(chartData);
    }, [])

    useEffect(() => {
        console.log(graphInfo);
    }, [graphInfo])
    
    
  return (
    <div className='graph-parent-container'>
        <div className="graph-header">
            <p>Decks Mais Jogados</p>
        </div>
        <div className="graph-container">
            {graphInfo?<HorizontalBarChart data={graphInfo} color={"rgb(243, 130, 29)"} height={270} />:<></>}
        </div>
    </div>
  )
}

export default TournamentGraph