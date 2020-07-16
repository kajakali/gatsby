import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';





const BaseballPage = (props) => {


    return(
      <>
      <Box p={8}>
          <p>hello this is the future baseball page</p>
          <Link to="/likes">Go back to the likes page</Link>
      </Box>

      </>
    )


    }

export default BaseballPage;
