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
        <p className="card-entry-code">{cardInfo.set + " " + cardInfo.number}</p>
    </div>
  )
}

export default CardEntry