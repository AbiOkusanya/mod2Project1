import React from 'react';
import axios from 'axios';

const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

class Reward extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: ' ' }

    }


    async getDrink() {
        try {
            const res = await axios.get(DRINKS_URL + 'drink');
            this.setState({ drink: res.data });

        } catch (e) {
            console.error(e);
        }

    }
    componentDidMount() {
        this.getDrink();
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.State({ [name]: value })
    }
    render() {
        return (
            <div className="drink.container">
                <h3>Reward Recipe</h3>
                <ul>
                    {
                        this.state.drink && this.state.drink.map(drink => (
                            <li key={drink.id} >
                                strDrink: {drink.strDrink} | Drink Instructions: {drink.strInstructions} |
                    Drink Glass:{drink.strGlass} Drink ingredient1 : {drink.strIngredient1} |
                   Drink ingredient2 :{drink.strIngredient2}
                            </li>
                        ))
                    }
                </ul>
            </div>


        )
    }
}



export default Reward;