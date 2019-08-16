import React,{ Component } from 'react';
import Body from './body.js'



class Main extends Component {
     
 

    render() {
       const { name,logout } = this.props
              fetch('http://localhost:3001/login',{
               method: 'post',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                 name : name
            })
           }).then(response => response.json())

    	return (
              <div>
                 <div className='ph3 tr mt5 '>
		            <button className="f6 link dim ph3 pv2 mb2 white bg-hot-pink" onClick={ logout }>Logout</button>
			      </div>
              	 <h1>{`Welcome ${ name.toUpperCase() } `}</h1>
              	   <div> 
                      <Body />
                   </div>  
              </div>
         		)
    }
     
}

export default Main