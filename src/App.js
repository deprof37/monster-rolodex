import React from 'react';

import CardList from './components/card-list/card-list.component';

import SearchBox from './components/searchBox/searchBox.component';

import './App.css';

class App extends React.Component {
  constructor(){ /*The constructor of our App class */
    super(); /* Calls the constructor function of the React.Component Class */

    this.state = {
      monsters: [],
      searchField: ''
    }

    //this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    // this.setState({searchField: e.target.value}, () => console.log(this.state));
    e.preventDefault();
    this.setState({searchField: e.target.value}); 
  }

  render() {
    //const { monsters, searchField } = this.state;  // Destructuring of this. state, equivalent to the explicit declaration of monsters and searchField
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/*<input type="search" onChange={this.handleChange}/> */}
        <SearchBox onSearchChange={this.handleChange} placeHolder="Search rolodex"/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
