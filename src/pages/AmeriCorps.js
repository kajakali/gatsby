import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';





const AmeriCorpsPage = (props) => {


    return(
      <>
      <Box p={8}>
          <h1>AmeriCorps</h1>
            <h2>NCCC</h2>
              <p>AmeriCorps*NCCC is a community service program for people between 18 and 24. They work in teams of
              ten and travel around the country providing community service for local organizations that request help</p>
              <p>The projects I worked on included:
                <ul>
                  <li>mucking out houses after hurricanes Katrina and Rita in Cameron Parish, LA</li>
                  <li>building houses with Habitat for Humanity in Mobile, AL, Slidell, LA, Baton Rouge, LA and Kalamazoo, MI</li>
                  <li>giving tours at the National Mississippi River Museum and Aquarium in Dubuque, IA</li>
                  <li>painting a house, helping kids with homework, and translating Spanish for the Boys and Girls Club and Salvation Army in Beaumont, TX</li>
                  <li>chainsawing trees in Lebanon, MO, to clean up after an ice storm</li>
                  <li>translating immigration paperwork for Cuban immigrants at the democratic national convention in Miami</li>
                  <li>being a camp counselor at a YMCA camp in Kalamazoo, MI</li>
                </ul> 
              </p>
            <h2>Minnesota Reading Corps</h2>
              <p>Minnesota Reading Corps is a program that places people as reading tutors in elementary schools to 
              help kids get up to grade level. The tutor spends about 15 minutes each day with each kid, running through
              exercises to help them catch up. I was at Como Park Elementary school. They&apos;re always looking for tutors. 
              If you or someone you know is interested, <a href="https://minnesotareadingcorps.org/">learn more</a>. 
              There&apos;s also a similar program for <a href="https://minnesotamathcorps.org/">math</a> tutoring.</p>

          <Link to="/">Go back to the homepage</Link>
      </Box>

      </>
    )


    }

export default AmeriCorpsPage;
