import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';





const SpacePage = (props) => {
  const createSpaceship = () => {
    //when the button is clicked, send the current pattern to the server
    console.log('create a spaceship!');

}

    return(
      <>
      <Box style={{color: "white", backgroundColor: "black", minHeight: "900px"}}>
          <p>hello this is the future space page</p>
          <Link style={{color: "#c9c2ff"}} to="/likes">Go back to the likes page</Link>
      </Box>

      </>
    )


    }

export default SpacePage;
