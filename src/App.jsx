import { useState } from 'react'

const ShowName = ({person}) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

const Fil = (props) => {
  const filteredData = props.persons.filter(person => {
    if (props.input === '') {return person}
    else if (person.name.toLowerCase().includes(props.input))
      {return person}
    }
  )
  console.log(filteredData)
  return (
      filteredData.map(person => <ShowName key={person.id} person={person} />)
  )
  
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('new name')
  const [newNumber, setNewNumber] = useState('new number')
  const [filter, setFilter] = useState('')
  

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
 
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }




  const addName = (event) => {
    event.preventDefault()
    if (persons.find(person => JSON.stringify(newName) === JSON.stringify(person.name)))
      return (alert(`${newName} is already added to phonebook`))

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with
          <input
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      <h3>Add a new</h3>
      <form>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
      </form>
      <h3>Filtered</h3>
      <ul>
      <Fil input={filter} persons={persons}/>
      </ul>
      <h3>All Numbers</h3>
      <ul>
      {persons.map(person => <ShowName key={person.id} person={person} />)}
      </ul>
    </div>
  )
}

export default App