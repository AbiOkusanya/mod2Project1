import React from 'react';
import axios from 'axios';

const DRINKS_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

class Reward extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    async getRandom() {
        try {
            const res = await axios.get(DRINKS_URL);
            this.setState({ drinks: res.data });
        } catch (e) {
            console.error(e);
        }
    }
    componentDidMount() {
        this.getRandom();
    }
    render() {
        return (
            <div className="randomDrinks">
                <ul>
                    {
                        this.state.drinks && this.state.drinks.map(drinks => (
                            <li key={drinks.id}>
                                Random drink: { drinks.strDrink} Drink Instructions: {drinks.strInstructions} |
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

;

export default Reward;