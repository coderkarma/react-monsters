import React from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import { Search } from './components/search-box/Search';

class App extends React.Component {
  state = {
    monsters: [],
    searchField: '',
  };

  handleChange = e => this.setState({ searchField: e.target.value });
  
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
        <h1> React-Monsters</h1>
        <Search
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
