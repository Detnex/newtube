import React from 'react';
import Card from './card';

const Cardlist = ({ videos }) => {
   return (
    <div>
       {
          videos.map((user , i) => {
            return ( 
              <Card
               key={i} 
               id={videos[i].id} 
               name={videos[i].name} 
               src={videos[i].src} 
               username={videos[i].username}
               />
            );
         })
       }    
    </div>
   );
}

export default Cardlist;