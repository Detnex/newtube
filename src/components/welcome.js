import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import Main from './main';


class Welcome extends Component {
     constructor () {
     	super() 
     	this.state = {
     		name: '',
     		isLoggedIn: true
     	}
     }
    
    logout = (props) => {
      this.setState({ isLoggedIn:true })
      fetch('http://localhost:3001/home',{}).then(res => res.json());
    }  

	 render() {
            const responseGoogle = (response) => {
		        this.setState({ name: response.profileObj.givenName, isLoggedIn: false })
		      
		     } 
  
	 	return(
      <div>
         { this.state.isLoggedIn ? (
              <div className="container1"> 
              <h1>Welcome to timble App</h1>
                  <GoogleLogin
                    clientId="817702232444-fbc6gtnuttmmf19to516thccsrnragfq.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess = {responseGoogle}
                    onFailure = {responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                  <h1>You need to Login first</h1>
                </div>  
          ) : (
             <div>
              <Main name = { this.state.name } logout = { this.logout } />
             </div> 
            )}
        </div>    
	 		) 
	 }
}

export default Welcome;