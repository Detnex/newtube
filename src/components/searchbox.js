import React from 'react';
import './style.css'

const Searchbox = ({searchfield,searchChange,savedata,data }) => {
    
    let suggest = [];
    suggest = data.sort().filter((v,i) => data.indexOf(v) === i);
     
    const onClicked = (props) => {
        const a = props.item;
        return(a);
    }

    return (
     <div className='pa2 autocomplete'> 
       <input 
         className = 'pa3 ba b--green bg-lightest-blue w-50'
         type='search' 
         placeholder='search videos'
         onChange = {searchChange}
         />
         <ul> 
             { suggest.map((item) => <li onClick={() => onClicked(item)}>{item}</li> )}
         </ul>
         <button className='pa3 ba b--blue bg-lightest-green ma3' onClick={savedata}>Search</button>
     </div>
    );
}

export default Searchbox;