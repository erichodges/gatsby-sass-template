import React from 'react'
import Link from 'gatsby-link'

const Nav = () => (
  <div>
    <div className="nav">
      <h1 className="logo">
        <Link
          to="/" 
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
          >
          Site Logo
        </Link>
      </h1>
    </div>
  </div>
)


export default Nav