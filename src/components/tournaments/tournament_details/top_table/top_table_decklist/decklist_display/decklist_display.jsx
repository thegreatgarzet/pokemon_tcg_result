import React, { useState } from 'react'
import './decklist_display.css'

import { MdOutlineContentCopy } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";

import CardlistEntry from '../cardlist_entry/cardlist_entry';
import CardImageEntry from '../card_entry/card_image_entry';

const DecklistDisplay = ({player, openListLink}) => {

  const [viewType, setViewType] = useState("List");

  const copyList = () =>{
    var pkmCount = 0;
    var trainerCount = 0;
    var energyCount = 0;

    var allPokemon = "";
    var allTrainer = "";
    var allEnergy="";

    player.decklist.pokemon.map((pkmnEntry) => {
      pkmCount += pkmnEntry.count;

      allPokemon += pkmnEntry.count + " " + pkmnEntry.name + " " + pkmnEntry.set + " " + pkmnEntry.number + "\n";
    });


    player.decklist.trainer.map((trainerEntry) => {
      trainerCount += trainerEntry.count;

      allTrainer += trainerEntry.count + " " + trainerEntry.name + " " + trainerEntry.set + " " + trainerEntry.number + "\n";
    });

    player.decklist.energy.map((energyEntry) => {
      energyCount += energyEntry.count;

      allEnergy += energyEntry.count + " " + energyEntry.name + " " + energyEntry.set + " " + energyEntry.number + "\n";
    });

    var finalList = "Pokémon: " + pkmCount + "\n" + allPokemon + "\n" + 
    "Trainer: " + trainerCount + "\n" + allTrainer + "\n" +
    "Energy: " + energyCount + "\n" + allEnergy;

    navigator.clipboard.writeText(finalList);

    alert("Lista Copiada!");
  };

  return (
    <div className="decklist-display-body">
        <div className="decklist-display-header">
            <div className="decklist-display-playerdata">
                <p>Decklist de <b>{player.name}</b> - <b>60</b> cartas</p>
            </div>
            <div className="decklist-display-viewtype-container">
                <button className={`viewtype-button ${viewType == "List"?'active':''}`} onClick={() => setViewType("List")}><FaListUl/> Lista</button>
                <button className={`viewtype-button ${viewType != "List"?'active':''}`} onClick={() => setViewType("Image")}><CiImageOn /> Imagem</button>
            </div>
            <div className="decklist-display-button-container">
                <button className='decklist-display-button' onClick={()=> copyList()}><MdOutlineContentCopy/> Copiar Lista</button>
                <button className='decklist-display-button' onClick={() => openListLink()}><FaExternalLinkAlt/> Limitless</button>
            </div>
        </div>
        {viewType == "List" ? 
        <div className="decklist-display-cardlist">
            <CardlistEntry title={'POKÉMON'} cardList={player.decklist.pokemon}/>
            <CardlistEntry title={'TREINADOR'} cardList={player.decklist.trainer}/>
            <CardlistEntry title={'ENERGIA'} cardList={player.decklist.energy}/>
        </div>
        :
        <div className="decklist-display-images">
          {player.decklist.pokemon.map((entry)=><div className="display-images"><CardImageEntry key={entry.set+entry.number} cardData={entry}/></div>)}
          {player.decklist.trainer.map((entry)=><div className="display-images"><CardImageEntry key={entry.set+entry.number} cardData={entry}/></div>)}
          {player.decklist.energy.map((entry)=><div className="display-images"><CardImageEntry key={entry.set+entry.number} cardData={entry}/></div>)}
        </div>
        }
        
    </div>
  )
}

export default DecklistDisplay