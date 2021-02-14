import React from 'react';
import snowmandrinks from "../images/snowmanwithbeer.JPG"

class Home extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${snowmandrinks})`,
            height:'750px',
            opacity:0.5 }}>
            <h1>Welcome</h1>
                       
            </div>
        )
    }
}
export default Home;