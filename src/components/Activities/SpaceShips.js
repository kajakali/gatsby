import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TheShip from './TheShip';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class SpaceShips extends Component {
    state = ({
        buildMode: false,
        currentShip: 1,
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
            <FormControl component="fieldset">
      <FormLabel component="legend">Style</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            {this.state.possibleShips.map((item, index) => (
                <FormControlLabel value={index} control=<Radio /> label={item} />
            ) )}
            <FormControlLabel value="0" control={<Radio />} label="Female" />
            <FormControlLabel value="1" control={<Radio />} label="Male" />
            <FormControlLabel value="2" control={<Radio />} label="Other" />
            <FormControlLabel value="3" control={<Radio />} label="(Disabled option)" />
        </RadioGroup>
      </FormControl>
            <Button color="primary" variant="contained" size="small" onClick={this.finishSpaceship}>Finish the Spaceship!</Button>
            </>
            :
            <Button color="primary" variant="contained" size="small" onClick={this.buildASpaceship}>Build a Spaceship!</Button>
            }
             <Box>
                <TheShip ship={this.state.possibleShips[this.state.currentShip]}/> 
             </Box>
            </>
        )
    }
}

export default SpaceShips;