import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';
import './CrossStitch.css';
//TODO figure out the css here.




const CrossStitchPage = (props) => {


    return(
      <>
      <Box p={8} className="my-container">
          <Box>
          <p>hello this is the future Cross Stitch page</p>
          
          <img src="http://www.artecyshop.com/images/large/colourfulabstract_LRG.jpg" alt="Colourful Abstract, a cross stitch project" />
          </Box>


      </Box>
      <Link to="/likes">Go back to the likes page</Link>

      </>
    )


    }

export default CrossStitchPage;
