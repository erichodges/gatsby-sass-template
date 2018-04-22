import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Nav from '../components/nav'


// import Header from '../components/header'
import './sass/main.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      <Nav />
    </div>
    
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
