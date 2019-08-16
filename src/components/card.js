import React from 'react';
import ReactPlayer from 'react-player';

const Card = ({ vid }) => {
 // console.log(vide);
  //vide.map((item) => console.log(item.slice(2,-2)))     
   const play = () => {
        fetch('http://localhost:3001/vplay',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            vplay:vid
              })
        })
         .then(response => response.json())
        .then(res => console.log(res))
     }  

    return ( 
    <div className='tc dib pa2 ma2 bw2 shadow-3 h-25 w-25'>
        <ReactPlayer url={ `https://www.youtube.com/watch?v=${vid.slice(1,-1)}` } controls={true}   width='100%' height='100%' onPlay={play}/>
    </div>
    )
}

export default Card;