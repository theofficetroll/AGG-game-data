import React from 'react';

const Results = ({ data }) => {
  console.log('result data', data);

  return (
    <div className='results'>
      {data}
    </div>
  )
}

export default Results;
