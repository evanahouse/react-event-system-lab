import React, { Component } from 'react'

class Keypad extends React.Component {
   
   
   handleChange = () => {
       console.log("Entering password...")
   }
   
   
    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.handleChange}></input>
            </div>
        )
    }
}

export default Keypad