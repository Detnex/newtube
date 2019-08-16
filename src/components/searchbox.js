import React from 'react';
import './style.css'
import SearchField from 'react-search-field';

const Searchbox = ({ searchfield,searchChange,savedata }) => {
    
    //suggest = data.sort().filter((v,i) => data.indexOf(v) === i);
     
    //const onClicked = (props) => {
      //  const a = props.item;
        //return(a);
    //}

    return (
     <div className='pa2 autocomplete'> 
       <SearchField 
         className = 'pa3 ba b--green bg-lightest-blue w-50 test-class'
         type='search' 
         placeholder='search videos'
         onChange = {searchChange}
         onEnter = {savedata}
           onSearchClick={savedata}
         />
        
     </div>
    );
}

export default Searchbox;