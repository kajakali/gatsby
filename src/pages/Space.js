import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';
import SpaceShips from '../components/Activities/SpaceShips';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'black',
    color: 'white',
    minHeight: 900,

  },
});

//TODO create a material ui theme that wraps the Space component.




const SpacePage = (props) => {
  const classes = useStyles();

    return(
      <>
      <Box className={classes.root}>
          <p>hello this is the future space page</p>
          {/**maybe here putthe theme? */}
          <SpaceShips />
          <Link style={{color: "#c9c2ff"}} to="/likes">Go back to the likes page</Link>
      </Box>

      </>
    )


    }

export default SpacePage;
