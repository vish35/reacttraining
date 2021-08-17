import React from 'react';
const headstyle={
    color:"#E73E8B"
    
    };
function Bollywood(){
return (
    <>
    <h2 style={headstyle}>Bollywood movies</h2>
    <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action active">
   Mision Mangal
  </button>
  <button type="button" className="list-group-item list-group-item-action">Raazi</button>
  <button type="button" className="list-group-item list-group-item-action">Sanju</button>
  <button type="button" className="list-group-item list-group-item-action">War</button>
  <button type="button" className="list-group-item list-group-item-action">Kabir Singh</button>
</div>
    </>
)
}

export default Bollywood;