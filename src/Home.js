import React from 'react';
import Movie from './images/movie1.jpg'

//component
function Home(){
   
    return(
        <div>
           <div style={{backgroundColor: "black"}}>
    <hgroup style={{float: "left",marginLeft: "400px "}}>
        
        <h2 style={{backgroundColor: "black", color: "white",   fontFamily: "Courier New, monospace"}}>EAT POPCORN</h2> 
        <h2 style={{backgroundColor: "white", color: "black",  fontFamily: "Courier New, monospace"}}>WATCH MOVIES</h2> 
        <h2 style={{backgroundColor: "black", color: "white",   fontFamily: "Courier New, monospace"}}>IGNORE THE WORLD</h2>  
    </hgroup>
        <img src={Movie} style={{float: "center",height:"150px",width:"150px"}} alt="movie"/>
        </div>

        </div>
    )
}

export default Home;