import React from 'react';
const headstyle={
color:"#E73E8B"

};
function Hollywood(){
return (
    <>
<h2 style={headstyle}>Hollywood movies</h2>
<div className="list-group">
  <button type="button" className="list-group-item list-group-item-action">
    Inception
  </button>
  <button type="button" className="list-group-item list-group-item-action">The dark knight</button>
  <button type="button" className="list-group-item list-group-item-action">Interstellar</button>
  <button type="button" className="list-group-item list-group-item-action">Avengars</button>
  <button type="button" className="list-group-item list-group-item-action">Whiplash</button>
</div>
    </>
)
}

export default Hollywood;