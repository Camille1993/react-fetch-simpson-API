import React from 'react';

function DisplayQuotes({ simpson }) {
  return (
    <div className='DisplayQuotes'>
      <ul>
        <li>{simpson.quote}</li>
        <li><img src={simpson.image}></img></li>
        <li>Name : {simpson.character}</li>

      </ul>
    </div>
  )
}

export default DisplayQuotes;