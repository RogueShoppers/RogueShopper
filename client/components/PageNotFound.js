import React from 'react'
import {Link} from 'react-router-dom'

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Sorry, we couldn't find that page!</h1>
        <img src="https://lh3.googleusercontent.com/oV-SV0SYmZ-WOjJwEmtpLib_WHOaAnUhegvKO41F9ZIGgUBd7ncX6YzzViq_eskABkiPRloKULB8HP3kzHni_MhhJ_2slWieNE_Qg6LHuG64yCRPLTDAYGQPAZaizVmkXR3xlutvZUo=w600-h315-p-k" />
        <span />
        <h4>
          If you had a cat...this probably wouldn't be happening...but if you
          must look at some silly <Link to="/products">dog toyz</Link>
        </h4>
      </div>
    )
  }
}

export default PageNotFound
