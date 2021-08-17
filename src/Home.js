import React from 'react';
import Nav from './Nav';
import logo from './images/flower.jpg';
//component
function Home(){
   
    return(
        <div>
            <Nav/>
           
            <h1 style={{backgroundColor:"lightcoral"}}>Home page</h1>
            <img src={logo}  style={{width:"400px",height:"400px"}} alt="Logo" />
        </div>
    )
}

export default Home;