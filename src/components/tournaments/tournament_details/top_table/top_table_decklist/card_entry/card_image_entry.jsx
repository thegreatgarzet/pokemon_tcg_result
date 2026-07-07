import React, { useState, useEffect } from 'react'
import './card_image_entry.css'

const CardImageEntry = ({cardData}) => {
    const [cardURL, setCardURL] = useState("");

    useEffect(() => {
      var cardCode = cardData.number >= 100? cardData.number : cardData.number >= 10? "0" + cardData.number : "00" + cardData.number;

      setCardURL(`https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/${encodeURIComponent(cardData.set)}/${encodeURIComponent(cardData.set)}_${encodeURIComponent(cardCode)}_R_EN_SM.png`);
    }, [])
    
  return (
    <div className="card-image-display">
        <img className='card-image-size' loading='lazy' src={cardURL}></img>
        <div className="card-image-count">
            x{cardData.count}
        </div>
    </div>
  )
}

export default CardImageEntry