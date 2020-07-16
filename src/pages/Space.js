import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';
import SpaceShips from '../components/Activities/SpaceShips';





const SpacePage = (props) => {


    return(
      <>
      <Box style={{color: "white", backgroundColor: "black", minHeight: "900px"}}>
          <p>hello this is the future space page</p>
          <SpaceShips />
          <Link style={{color: "#c9c2ff"}} to="/likes">Go back to the likes page</Link>
      </Box>

      </>
    )


    }

export default SpacePage;
