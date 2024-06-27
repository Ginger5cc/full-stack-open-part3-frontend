import axios from 'axios'
import personService from '../services/persons'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    const addName = (event) => {
        event.preventDefault()
        if (persons.find(person => JSON.stringify(newName) === JSON.stringify(person.name)))
          return (alert(`${newName} is already added to phonebook`))
    
        const nameObject = {
          name: newName,
          number: newNumber
        }
        personService
          .create(nameObject)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNumber('')
          })
        
      }

      

    return (
        <form>
        <div>
          name: 
          <input
            value={newName}
            onChange={(event) => {setNewName(event.target.value)}}
          />
        </div>
        <div>
          number: 
          <input
            value={newNumber}
            onChange={(event) => {setNewNumber(event.target.value)}}
          />
        </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
        </form>
    )
}

export default PersonForm