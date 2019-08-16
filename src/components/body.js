import React,{ Component } from 'react';
import Cardlist from './cardlist';
import Scroll from './scroll'
import Searchbox from './searchbox';

class Body extends Component {
   constructor () {
        super();
        this.state = {
             videos: [],
            searchfield:'',
            data:'',
            ispage: true
        }
    }
     
    onSearchChange = (event) => {
         this.setState({ searchfield: event });
    } 

    onSaveData = (props) => {
        this.setState({data:this.state.searchfield})
      if(this.state.videos.length === 0) {
           
            fetch('http://localhost:3001/search',{
            method: 'post', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               search:this.state.searchfield
            })
        })
         .then(response => response.json())
         .then(res => {
             this.setState({
                 videos: res.vurl
             })
         })  
      }  else {
              this.state.videos.length = 0;
             fetch('http://localhost:3001/search',{
            method: 'post', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               search:this.state.searchfield
            })
        })
         .then(response => response.json())
         .then(res => {
             this.setState({
                 videos: res.vurl
             })
         })  
      }
      
         this.setState({ispage:false})
         

    }


    change = (props) => {
       this.setState({ispage:true})
    }

    render() {
       const { videos } = this.state ;
       //   const filteredvideos = videos.filter( videos =>{
         // return videos.name.toLowerCase().includes(this.state.data.toLowerCase());
          //}) 
        return(
            <div className='tc'> 
                 <Searchbox searchChange={this.onSearchChange} savedata={this.onSaveData} />      
              <div>
          {// <button onClick={ this.change } className='f6 link dim ph3 pv2 mb2 white bg-blue'>SEARCH</button>     
                      }    
                 <Scroll>
                   <Cardlist video = { videos } /> 
                 </Scroll>
              </div>
              </div> 
         )}
}

export default Body