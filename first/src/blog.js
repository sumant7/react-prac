import React from 'react';
import PropTypes from 'prop-types'

const card =(props)=>{
    return(
    <div className='card'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      </div>
    )
}

card.propTypes = { 
  title: PropTypes.string,
  description: PropTypes.string
}

export default card;