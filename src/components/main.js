import React,{ Component } from 'react';
import Body from './body.js'



class Main extends Component {
     
 

    render() {
       const { name,logout } = this.props
             const a = [];
              fetch('http://localhost:3001/login',{
               method: 'post',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                 name : name
            })
           }).then(response => response.json()).then(response => {
              if(response) {
                  fetch('http://localhost:3001/data',{}).then(response => response.json())
                  .then(res => res.forEach((data1) => {
                           a.push(data1);

                  } ));
              }

           })
            console.log(a);   

    	return (
              <div>
                 <div className='ph3 tr mt5 '>
		            <button className="f6 link dim ph3 pv2 mb2 white bg-hot-pink" onClick={ logout }>Logout</button>
			      </div>
              	 <h1>{`Welcome ${ name.toUpperCase() } `}</h1>
              	   <div> 
                      <Body a = { a }/>
                   </div>  
              </div>
         		)
    }
     
}

export default Main