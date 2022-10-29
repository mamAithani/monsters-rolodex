import { Component } from "react"; 
import './search.styles.css'

class Search extends Component 
{ 
    render()
    {
        const {  searchChangeHandler } = this.props; 
        //console.log('search' + searchField + 'search');
        return (
            <input type="search"
                   className="search-box"
                   placeholder="search monsters"
                   onChange = { (event) => { searchChangeHandler(event) } } 
                   />           
        );
    }
}

export default Search;