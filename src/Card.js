import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='pic of agent' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>Robot Ranking: {id}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
