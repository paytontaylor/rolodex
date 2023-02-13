import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css"

const App = () => {
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)
    const [searchField, setSearchField] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(monsters => setMonsters(monsters))
    }, [])

    useEffect(() => {
        const newfilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
         })
         setFilteredMonsters(newfilteredMonsters)
    }, [monsters, searchField])

    const onSearchChange = (evt) => {
        const searchFieldString = evt.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)
    }

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox 
                onChange={onSearchChange} 
                className="search-box" 
                placeholder="search monsters" 
            />
            <CardList monsters={filteredMonsters} />
        </div>
    )
}

export default App;
