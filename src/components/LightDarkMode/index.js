/* Write your code here

import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({prevState: isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading"> Click To Change Mode </h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode*/

import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {mode: true, text: 'Light Mode'}

  lightMode = () => {
    this.setState({mode: false, text: 'Dark Mode'})
  }

  darkMode = () => {
    this.setState({mode: true, text: 'Light Mode'})
  }
  render() {
    const {mode, text} = this.state

    return(
       { mode ?(
      <div className="bg-dark-container">
        <h1 className="heading"> click To change Mode </h1>
        <button className="button" onClick={this.lightMode}>
          {text}
        </button>
      </div>
    ) : (
      <div className="bg-light-container">
        <h1 className="heading"> click To change Mode </h1>
        <button className="button" onClick={this.darkMode}>
          {' '}
          {text}{' '}
        </button>
      </div>
    )
  }})
}
}

export default LightDarkMode
