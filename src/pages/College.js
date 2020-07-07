import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';





const CollegePage = (props) => {


    return(
      <>
      <Box p={8}>
      <h1>College</h1>
      <h2>Chemistry</h2>
        <p>I had always said that the one subject I could imagine getting a 4 year degree in was Chemistry. 
        I kind of wish I&apos;d gone a little more biochemical, but I still got to take biochemistry classes. 
        The biological bits of Chemistry are so interesting. My favorite parts are immune systems and how we 
        turn sunshine into thinking. Plain old hard Chemistry is pretty cool, too - turning molecules into other
        molecules with just a little math is pretty neat! </p>
      <h2>Applied Mathematics</h2>
        <p> I wasn&apos;t <i>planning</i> on getting a minor in math, it was supposed to be physics. But in my 
        last semester, I needed a 5 credit physics class and there weren&apos;t any. So instead I took differential
        equations. </p>
      </Box>
      <Link to="/">Go back to the homepage</Link>
      </>
    )


    }

export default CollegePage;
