import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameDisplay: false, isLastNameDisplay: false}

  onShowHideFirstName = () => {
    this.setState(prevState => ({
      isFirstNameDisplay: !prevState.isFirstNameDisplay,
    }))
  }

  onShowHideLastName = () => {
    this.setState(prevState => ({
      isLastNameDisplay: !prevState.isLastNameDisplay,
    }))
  }

  render() {
    const {isFirstNameDisplay, isLastNameDisplay} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="first-last-name-container">
            <div className="firstName-container">
              <button
                className="show-hide-button"
                type="button"
                onClick={this.onShowHideFirstName}
              >
                Show/Hide Firstname
              </button>
              {isFirstNameDisplay && (
                <div className="name-container">
                  <p className="name-heading">Joe</p>
                </div>
              )}
            </div>
            <div className="lastName-container">
              <button
                className="show-hide-button"
                type="button"
                onClick={this.onShowHideLastName}
              >
                Show/Hide Lastname
              </button>
              {isLastNameDisplay && (
                <div className="name-container">
                  <p className="name-heading">Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
