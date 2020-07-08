import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';
import Raining from '../components/Activities/Raining'





const RainPage = (props) => {


    return(
      <>
      <Box>
          <p>hello this is the future rain page</p>
          <Raining/>
          
      </Box>
      <Link to="/">Go back to the homepage</Link>
      </>
    )


    }

export default RainPage;
