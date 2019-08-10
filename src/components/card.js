import React from 'react';
import ReactPlayer from 'react-player';

const Card = ({ name,src,id,username }) => {
     
   const play = () => {
        fetch('http://localhost:3001/vplay',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            vplay:src
              })
        })
         .then(response => response.json())
        .then(res => console.log(res))
     }

    return (
    <div className='tc dib pa2 ma2 bw2 shadow-3 h-25 w-25' >
        <ReactPlayer url={ src } controls={true}   width='100%' height='100%' onStart={ play } />
        <div className='Times f4 lh-copy i'>
            {name} <br/>
            {id} <br/>
            {username}
        </div>
    </div>
    );
}

export default Card;