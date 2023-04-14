// Write your code here

import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
    state ={mode: true}
    lightMode = () => {
        this.setState(() = {
            console.log("lightMode")
            return{mode: false}
        })
    }

    darkMode = () => {
        this.setState(() => {
            console.log("darkMode")
            return{mode: true}
        })
    }

  render() {
      {mode} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading"> click To change Mode </h1>
        <button className="button"> Light Mode </button>
        {mode? (<button className="button" onClick = {this.lightMode}> Light Mode </button>): (<button className="button"  onClick = {this.darkMode}> Dark Mode </button>)}
      </div>
    )
  }
}
