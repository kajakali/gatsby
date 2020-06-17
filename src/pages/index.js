import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Card from '../components/Card/Card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Frieda Jacobson</h1>
    <p>Here's where I can put some cards and such</p>
    <Card name='Prime' />
    <Card name='Chemistry' />
    <Card name='Navy'/>
    <Card name='AmeriCorps'/>



{/*     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/likes/">Go see things I like</Link> <br />

  </Layout>
)

export default IndexPage
