import React from 'react'
import Link from 'gatsby-link'
import { locationsAreEqual } from 'history';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    
    <b>Welcome to your new Gatsby site.</b>
    
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
