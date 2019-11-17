import React from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';

class App extends React.Component {
  state = {
    monsters: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <input
          onChange={e => {
            this.setState({ searchField: e.target.value });
          }}
          type="search"
          placeholder="Search Monsters"
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
