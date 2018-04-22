import React from 'react'
import Link from 'gatsby-link'
import { locationsAreEqual } from 'history';

const IndexPage = () => (
  <div>
    <div className="nav">
      <h1>Nav logo</h1>
      
    </div>
    <h2 className="h1">Main Heading</h2>
    
      <h3>Welcome to your new Gatsby site.</h3>

    <p>      
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
      rerum delectus est soluta ullam unde eius dolorum expedita sapiente,
      eveniet, nulla harum? Quidem, molestias nisi! Est, ad at! Optio,
      doloremque. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Accusantium rerum delectus est soluta ullam unde eius dolorum expedita
      sapiente, eveniet, nulla harum? Quidem, molestias nisi! Est, ad at! Optio,
      doloremque.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
