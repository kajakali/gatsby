import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TheShip from './TheShip';


class SpaceShips extends Component {
    state = ({
        buildMode: false,
        currentShip: 0,
        possibleShips: ["#classy_spaceship", "#bubble_spaceship", "#alien_spaceship", "#space_shuttle"]
    });


 buildASpaceship = () => {
     console.log("Build a spaceship!!!");
     this.setState({
         buildMode: true
     })
 }
 finishSpaceship = () => {
     console.log("Spaceship Complete");
     this.setState({
         buildMode: false
     })
 }
    
    render(){
        return(
            <>
            {this.state.buildMode
            ?
            <>
            <TextField />
            <Button color="primary" variant="contained" size="small" onClick={this.finishSpaceship}>Finish the Spaceship!</Button>
            </>
            :
            <Button color="primary" variant="contained" size="small" onClick={this.buildASpaceship}>Build a Spaceship!</Button>
            }
             
            <TheShip ship={this.state.possibleShips[this.state.currentShip]}/> 
            </>
        )
    }
}

export default SpaceShips;