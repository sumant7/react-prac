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
  title: PropTypes.string.isRequired,  //is always required, won't work if default value is given
  description: PropTypes.string
}

card.defaultProps = {
  title: "Title here", //this shows when no value is passed
  //description: "None"
}
export default card;