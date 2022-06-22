import React from 'react';

const card =(props)=>{
    return(
    <div className='card'>
      <h3>{props.title +" " + (props.n+1)}</h3>
      <p>Description</p>
      </div>
    )
}

export default card;