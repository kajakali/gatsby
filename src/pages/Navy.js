import React from 'react';
import { Link } from "gatsby";
import Box from '@material-ui/core/Box';





const NavyPage = (props) => {


    return(
      <>
      <Box>
          <p>hello this is the future navy page</p>
          <p> I spent six years in the navy as a Nuclear Machinists Mate (MMN). That&apos;s a mechanic that works on 
          nuclear powered aircraft carriers. My carrier was the USS Abraham Lincoln, CVN 72.</p>
          <p>Before you&apos;re qualified to be a MMN, you have to do a lot of training. Years of training. First
          there&apos;s boot camp, of course, where you learn how to tie knots and march in step (I can tie knots, 
          but I look silly while marching - when we did our marching inspection, they left me in our berthing)
          Then there is nuclear field A school - that&apos;s learning about hammers and wrenches and lube oil and fluid dynamics.
          Next is power school, the first tough school - you spend six months learning a couple of years of college level
          nuclear physics. Things like reactor principles, and nuclear chemistry and materials and how they&apos;re affected
          by radiation. You also learn electrical and mechanical theory. My worst class was electrical theory for mechanical
          operators. I got an 87.5%. Electrical theory still bothers me - alternating current is so strange! And even though
          I think the idea that every motor is a generator and every generator is a motor (once they start moving), I still 
          think electrical theory is kind of tough. I graduated first in my class, and went off to prototype. That&apos;s where they 
          let a bunch of teenagers operate little nuclear power plants in old submarines in the river. Prototype is tough in a 
          different way than power school - it&apos;s when you have to put theory in to practice, and when you have to balance learning 
          new information with copmleting all the tasks you&apos;re given. After over a year and a half of schooling, you finally get to 
          go out to the fleet!
          </p>
          <p>Of course, when you get to your new ship, you have to start all over, learning a whole new set of equipment. The general 
          principles are the same, but the actual equipment varies greatly - the design parameters for an aircraft carrier are not the 
          same as those for a submarine. I learned to stand all the required watches and qualified CMO, which means that I was in charge
          of 6 other people and the 7 of us had to take care of one of the enginerooms and make sure that everything ran smoothly. Someone 
          had to stand watch 24/7 (even if we were shutdown in port, someone had to stand watch over the space), so five out of every fifteen
          hours, I would spend standing in the machinery space, being very hot, and preventing things from breaking. I also wound up becoming 
          our LPO because we were undermanned. So for some of that time I also was in charge of our whole division of 40 people, to maintain that machinery space and 
          make sure we got training and did all our planned maintenance and also any corrective maintenance. As my time in the navy came to a close, I 
          was tapped to give lots of training on things like class C fires, and also to coordinate the work controls for all the maintenance that 
          had to be done because our ship entered a reactor compartment overhaul, which is several years in drydock and includes refueling the reactor, 
          but also anything else that needs to be done to update the ship.</p>
          {/**TODO add link to navy page for nukes, also add keynote presentation I made on MMNs
          Also, perhaps, talk about how these skill make a good programmer... */}
      </Box>
      <Link to="/">Go back to the homepage</Link>
      </>
    )


    }

export default NavyPage;
