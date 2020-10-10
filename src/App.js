import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';



class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  handleChange = (e)=>{
    this.setState({ searchField: e.target.value }, () => {
      console.log(this.state.searchField);
    })
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(result => {
      result.json().then(finalresult => {
        this.setState({ monsters: finalresult })
      })
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const modMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox 
         placeholder="enter a value" 
         handleChange={this.handleChange}></SearchBox>

        <CardList monsters={modMonsters}>
        </CardList>
      </div>
    );
  }

}

export default App;
