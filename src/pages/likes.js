import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card/Card"

const Likes = () => (

      <Layout>
      <SEO title="Likes" />
      <h1>Things I like</h1>
      <Card name='CrossStitch' />
      <Card name='Rain' click={()=>console.log('Rain')}/>
      <Card name='Baseball' click={()=>console.log('Baseball')}/>
      <Card name='Space' click={()=>console.log('Space')}/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>


)

export default Likes
