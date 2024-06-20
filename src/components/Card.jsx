import React from 'react'

const Card = ({icon,heading,paragraph}) => {
  return (
    <div className='card'>
        <div className="icon">{icon}</div>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  )
}

export default Card
