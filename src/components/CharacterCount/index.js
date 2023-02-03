import './index.css'

const CharacterCount = props => {
  const {eachChar} = props
  const {character} = eachChar
  const count = character.length

  return (
    <li className="character-count">
      <p>
        {character} : {count}
      </p>
    </li>
  )
}

export default CharacterCount
