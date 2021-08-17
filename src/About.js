import React from 'react';

class About extends React.Component{


    constructor(props){
        super(props);
        this.state={
            counter:0
        };
        console.log("Contructor phase");
    }
    updateCounter(){
this.setState((prevState)=>{
return{counter:prevState.counter+1};
})

    }
    // eslint-disable-next-line react/require-render-return
    render(){
        return(<>
            <h2>Find out about movie subsription</h2>
            <button style={{marginBottom:"10px",marginTop:"5px"}} className="btn btn-warning" onClick={()=>this.updateCounter()}>Hit counter {this.state.counter}</button>
            </>);
    }
}

// function About(){
//     return(
//         <h1 style={{backgroundColor:"lightgreen"}}>About page</h1>
//     );
// }
export default About;