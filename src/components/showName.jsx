import axios from 'axios'

const ShowName = ({person, persons, setPersons}) => {
  const delPersonOf = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      console.log('ready to delete ' + id)
      const url = `http://localhost:3001/persons/${id}`
      const arr = persons.filter(n => n.id != id)

      axios.delete(url).then(setPersons(arr))
    }
  }
    return (
      <ul>
      <li>{person.name} {person.number}</li> 
      <button onClick={() => delPersonOf(person.id, person.name)}>delete</button>
      </ul>
    )
  }

export default ShowName