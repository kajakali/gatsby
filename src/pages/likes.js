import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card/Card"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Card name='Rain'/>
    <Card name='Baseball' />
    <Card name='Space' />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
