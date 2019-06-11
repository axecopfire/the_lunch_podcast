import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="The Lunch Podcast" />
    <h1>The Lunch Podcast</h1>
    <aside>
      <ul class="social-media-links" >
        <li>twitter</li>
        <li>anchor FM</li>
      </ul>
    </aside>
    <section class="rss-feed" >

    </section>
  </Layout>
)

export default SecondPage
