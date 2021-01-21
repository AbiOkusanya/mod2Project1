import React from 'react';
import axios from 'axios';

const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

class Reward extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    async getDrinks() {
        try {
            const res = await axios.get(DRINKS_URL);
            this.State({ drinks: res.data });

        } catch (e) {
            console.error(e);
        }

    }
    componentDidMount() {
        this.getDrinks();
    }
    render() {
        return (
            // console.log(this.state.drinks.drinks)

            <div className="Drinks">
                <h3>Reward Recipe</h3>
                <ul>
                    {
                        this.state.drinks && this.state.drinks.map(drinks => (
                            <li key={drinks.id}>
                                strDrink: {drinks.strDrink} | Drink Instructions: {drinks.strInstructions} |
                    Drink Glass:{drinks.strGlass} Drink ingredient1 : { drinks.strIngredient1} |
                   Drink ingredient2 :{drinks.strIngredient2}
                            </li>
                        ))
                    }
                </ul>
            </div>


        )
    }
}



export default Reward;