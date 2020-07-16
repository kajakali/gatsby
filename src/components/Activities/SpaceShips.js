import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class SpaceShips extends Component {

 buildASpaceship = () => {
     alert("Build a spaceship!!!");
 }
    
    render(){
        return(
            <>
                <Button color="primary" variant="contained" size="small" onClick={this.buildASpaceship}>Build a Spaceship!</Button>
            </>
        )
    }
}

export default SpaceShips;