import React from 'react';

class Contact extends React.Component{
   
    render(){
        const mystyle={
            backgroundColor:"lightpink"
        };
        return(
           <>
                <h2 style={mystyle}>Contact page</h2>
                <h2 style={mystyle}>We will get back to you.</h2>
           </>

        )
    };
}

export default Contact;