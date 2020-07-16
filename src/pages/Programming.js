import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #e8ffee 30%, #e8eaff 90%)',

  },
});





const ProgrammingPage = (props) => {

  const classes = useStyles();

    return(
      <>
      <Box p={8} className={classes.root}>
          <p>hello this is the Programming page</p>
          <ul>
       <li>Here's my solo project,  <a href='https://cross-stitch-buddy.herokuapp.com/'>Cross Stitch Buddy</a>, the first website I've ever built, which I built in a two week sprint for the purpose of keeping
         track of string for cross stitch projects. You might try logging in as mia, with a password of mia,
          to get a chance to see it with some data already in the database. </li>
      <li>Here's our <a href="https://we-can-ride-volunteer-schedule.herokuapp.com/#">group project</a> - a volunteer scheduling app we built for We Can Ride
        The purpose of this app is to let volunteers schedule themselves into the master schedule made by an admin. If you want to go try out the app and see
        how it would look for a volunteer, you could try logging in with the username of tryThis@tryThis.com and password of tryThis (this isn't the client's version 
        of the app, it's just mine, you won't ruin anything by doing whatever you like as a user) </li>
      <li>This is where I've been playing around with code as I learn to make a <a href='https://nonogram-fun.herokuapp.com/' >
        Nonogram</a> puzzle, one little piece at a time. It certainly isn't a complete application, I've just started, but I thought
      it would be cool to see what it does as time goes by</li>
      <li>you can also go look at my <a href="https://github.com/kajakali" >GitHub</a></li>
      </ul>
      <Link to="/">Go back to the homepage</Link>
      </Box>

      </>
    )


    }

export default ProgrammingPage;
