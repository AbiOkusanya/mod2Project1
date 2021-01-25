import React from 'react';
import axios from 'axios';


const Reward_URL = 'https://api.punkapi.com/v2/beers'

class Reward extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        // { data: ' ' }
    }


    async getBeers() {
        try {
            const res = await axios.get(Reward_URL);
            this.setState({ beers: res.data });

        } catch (e) {
            console.error(e);
        }

    }
    componentDidMount() {
        this.getBeers();
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.State({ [name]: value })
    }
    render() {
        return (
            <div className="beers container">
                <h3>Reward Recipe</h3>
                <ul>

                    {
                        this.state.beers && this.state.beers.map(beers => (
                            <li key={beers.id} >
                                {beers.name} | Tagline: {beers.tagline} |
                    Description:{beers.description}
                            </li>
                        ))}



                </ul>
            </div>


        )
    }
}



export default Reward;