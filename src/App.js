//npm import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Search from './components/search/search.component';

class App extends Component
{
    constructor(){
      super();

      this.state = {
          monsters: [] 
        , searchField: '' 
      };
      console.log('1');
    }  

    render(){ 
        console.log ('2'); 
        const { monsters,searchField } = this.state;
        const { onSearchChangeHandler} = this; 
       // console.log ( monsters )
        //console.log( searchField)

        const filteredMonsters  = monsters.filter( (monster) => {
          return monster.name.toLowerCase().includes(searchField); 
        });
   
        return (
        <div className="App">  
            <h1 className='app-title'>Monsters Rolodex </h1>  

            <Search searchChangeHandler= {onSearchChangeHandler}/>
            <CardList monsters= {filteredMonsters}/>
        </div>            
      );
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then( (response) => ( response.json()  )) 
      .then( (users) =>  this.setState( () => { return {monsters : users }} ))      
      console.log('3');
    }

    onSearchChangeHandler = (event) => {
      const searchValue = event.target.value.toLowerCase(); 
       this.setState(()=> {return {searchField: searchValue } });   //this method calls the rerender 
    }


}

export default App;
