import React from 'react';
import { Link } from "gatsby";

import Layout from "../components/layout";
//import Image from "../components/image"
import SEO from "../components/seo";
import Card from '../components/Card/Card';

import Box from '@material-ui/core/Box';





const IndexPage = (props) => {
  //const [choice, setChoice] = React.useState=('');

    return(
      <Layout>
      <SEO title="Home" />
      <h1>Things I've Done</h1>
      <Box>
        <Card name='Programming' click={()=>console.log('Programming')}/>
        <Card name='College' click={()=>console.log('College')}/>
        <Card name='Navy' click={()=>console.log('Navy')}/>
        <Card name='AmeriCorps' click={()=>console.log('AmeriCorps')}/>
      </Box>
  {/*     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      <Link to="/likes/">Go see things I like</Link> <br />
  
    </Layout>
    )


    }

export default IndexPage;
