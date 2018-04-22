import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div>
    <div className="header">
      <div>
        <svg className="hamburger__icon">
          <use xlinkHref="img/hamburger.svg#hamburger"></use>
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
      <div className="header-links">          
        <Link to="page-2" className="header-page-link">
          <div className="header-links__page">Page 2</div>
        </Link>
        <Link to="page-3" className="header-page-link">
          <div className="header-links__page">Page 3</div>
        </Link>
        <Link to="page-4" className="header-page-link">
          <div className="header-links__page">Page 4</div>
        </Link>                    
      </div>

    </div>
  </div>
)


export default Header