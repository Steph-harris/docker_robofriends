import React from 'react';

const Searchbox = ({ searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className='pa2 ma2 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search Robots'
        onChange={searchChange}
        maxLength='25'
      />
    </div>
  )
}

export default Searchbox;
