import React, { Component }  from 'react';
import Bollywood from './Bollywood';
import Hollywood from './Hollywood';

class Movies extends Component{

    constructor(props){
        super(props);
        this.state={
            condition:true
        };
        this.loadmovies = this.loadmovies.bind(this);
    }
     loadmovies(condition){
        this.setState({condition})
            }
   render(){
       const {condition}=this.state;
    return(
        <>
        <button type="button" className="btn btn-primary btn-lg" onClick={()=>this.loadmovies(true)}>Hollywood</button>
        <button type="button" className="btn btn-secondary btn-lg" onClick={()=>this.loadmovies(false)}>Bollywood</button>
        {condition === true ? <Hollywood /> : <Bollywood />}
        </>
    )
   }
};
export default Movies;