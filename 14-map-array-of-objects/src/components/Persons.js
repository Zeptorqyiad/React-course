import Person from "./Person"
import persons from "../data/persons"

function Persons() {
	return persons.map((person) => {
		return <Person {...person} key={person.id} />
	})
}

export default Persons