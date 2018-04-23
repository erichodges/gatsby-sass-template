import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div>
    <div className="header">
      <div className="hamburger-logo">
        <div className="hamburger-icon">
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24"            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </div>
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
      <div className="header-links">          
        <Link to="page-2" className="header-page-link">
          <div className="header-links__page">Products</div>
        </Link>
        <Link to="page-3" className="header-page-link">
          <div className="header-links__page">About</div>
        </Link>
        <Link to="page-4" className="header-page-link">
          <div className="header-links__page">Contact</div>
        </Link>                    
      </div>

    </div>
  </div>
)


export default Header