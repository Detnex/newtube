import React,{ Component } from 'react';
import Cardlist from './cardlist';
import Scroll from './scroll'
import Searchbox from './searchbox';
import { videos } from '../videos';

class Body extends Component {
   constructor () {
        super();
        this.state = {
            videos: [],
            searchfield:'',
            data:'',
            ispage: false
        }
    }
     
       componentDidMount () {
          this.setState({ videos: videos })
    }

    onSearchChange = (event) => {
         this.setState({ searchfield: event.target.value })
    } 

    onSaveData = (props) => {
        this.setState({data:this.state.searchfield})
        fetch('http://localhost:3001/search',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               search:this.state.searchfield
            })
        })
         .then(response => response.json())
         .then(res => console.log(res))
         this.setState({ispage:false})
    }

    change = (props) => {
       this.setState({ispage:true})
    }
    
    render() {
         const { a } = this.props;
          const filteredvideos = this.state.videos.filter( videos =>{
          return videos.name.toLowerCase().includes(this.state.data.toLowerCase());
         })
         if(this.state.videos.length === 0) {
             return <h1 className='tc'>Loading</h1>
         } 
         else {
        return(
            <div className='tc'> { this.state.ispage ? (
                 <Searchbox searchChange={this.onSearchChange} savedata={this.onSaveData} data = { a } />      
              ) : (
                <div>
                 <button onClick={ this.change } className='f6 link dim ph3 pv2 mb2 white bg-blue'>SEARCH</button>
                 <Scroll>
                 <Cardlist videos = { filteredvideos } />
                 </Scroll>
                </div> 
              )}
             
            </div>  
          );
         }
    }
}

export default Body