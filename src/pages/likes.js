import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card/Card"

const Likes = () => (

      <Layout>
      <SEO title="Likes" />
      <h1>Things I like</h1>
      <Card name='Rain'/>
      <Card name='Baseball' />
      <Card name='Space' />
      <Link to="/">Go back to the homepage</Link>
    </Layout>


)

export default Likes
