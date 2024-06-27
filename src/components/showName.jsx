import personService from '../services/persons'

const ShowName = ({person, persons, setPersons}) => {
  const delPersonOf = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      const arr = persons.filter(n => n.id != id)
      personService.delP(id).then(setPersons(arr))
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