import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';
import Raining from '../components/Activities/Raining'





const RainPage = (props) => {


    return(
      <>
      <Box>
          <p>hello this is the rain page</p>
          <Raining/>
          <Link to="/likes">Go back to the likes page</Link>
      </Box>

      </>
    )


    }

export default RainPage;
