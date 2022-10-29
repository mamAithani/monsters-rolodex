import { Component } from "react"; 
import Card from "../card/card.component";
import './card-list.styles.css'

class CardList extends Component
{ 
    render()    
    {
        const { monsters } = this.props; 
        //console.log( 'cardlist')
        //console.log ( monsters);
        return(
            <div className="card-list">
                {       
                    monsters.map((monster) => {
                        //console.log( monster );
                            return ( <Card monster = {monster} />)                           
                        })   
                }               
            </div>         
        );
    }
}

export default CardList