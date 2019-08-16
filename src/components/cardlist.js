import React from 'react';
import Card from './card';

const Cardlist = ({ video }) => {
  
  return ( 
        <div>
      {
        video.map((user, i) => {
          return (
            <Card
              key={i}
              vid={video[i]}
              />
          );
        })
      }
    </div>     
          )
}

export default Cardlist;