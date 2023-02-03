import {Component} from 'react'
import {v4} from 'uuid'

import CharacterCount from '../CharacterCount'
import './index.css'

class CharacterCounter extends Component {
  state = {character: '', charactersList: []}

  addCharacters = () => {
    const {character} = this.state
    const characterObject = {
      id: v4(),
      character,
    }
    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, characterObject],
      character: '',
    }))
  }

  onChangeCharacter = event => {
    this.setState({character: event.target.value})
  }

  render() {
    const {character, charactersList} = this.state
    const showChar = charactersList.length === 0
    return (
      <div className="bg-container">
        <div className="results-card">
          <div className="heading">
            <h1>Count the characters like a Boss</h1>
          </div>
          <div className="counter-card">
            {showChar ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-user-inputs"
              />
            ) : (
              <ul className="counters-list">
                {charactersList.map(eachChar => (
                  <CharacterCount eachChar={eachChar} key={eachChar.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="add-container">
          <h1>Character Counter</h1>
          <form>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input"
              value={character}
              onChange={this.onChangeCharacter}
            />
            <button
              type="button"
              className="add-btn"
              onClick={this.addCharacters}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
