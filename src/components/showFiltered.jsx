import ShowName from './showName'

const Persons = (props) => {
    const filteredData = props.persons.filter(person => {
      if (props.input === '') {return person}
      else if (person.name.toLowerCase().includes(props.input))
        {return person}
      }
    )

    return (
        filteredData.map(person => <ShowName key={person.id} person={person} />)
    )
    
  }

export default Persons