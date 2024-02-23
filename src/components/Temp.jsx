import React from 'react';
import Cards from './Cards';
import RightAddress from './RightAddress';

function Temp({ groupModal }) {
  return (
    <div className="relative ">
      <Cards />
      <RightAddress groupModal={groupModal} />
    </div>
  );
}

export default Temp;
