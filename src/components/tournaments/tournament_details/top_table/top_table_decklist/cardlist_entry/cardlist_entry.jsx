import React, { useState, useEffect } from 'react'
import './cardlist_entry.css'

import CardEntry from '../card_entry/card_entry'

const CardlistEntry = ({title, cardList}) => {
  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    var newCount = 0;

    cardList.map((cardEntry) => newCount+=cardEntry.count);

    setCardCount(newCount);
  }, [])
  

  return (
    <div className="cardlist-entry-body">
        <div className="cardlist-entry-header">
            <p>{title} ({cardCount})</p>
        </div>
        <div className="cardlist-entry-cards">
            {cardList.map((cardEntry) => <CardEntry key={cardEntry.set + cardEntry.number} cardInfo={cardEntry}/>)}
        </div>
    </div>
  )
}

export default CardlistEntry