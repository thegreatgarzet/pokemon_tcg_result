import React from 'react'
import './card_entry.css'

const CardEntry = ({cardInfo}) => {
  return (
    <div className="card-entry-body">
        <div className="card-entry-count">
            <p>{cardInfo.count}</p>
        </div>
        <div className="card-entry-name">
            <p>{cardInfo.name}</p>
        </div>
        <div className="card-entry-code">
            <p>{cardInfo.set} {cardInfo.number}</p>
        </div>
    </div>
  )
}

export default CardEntry