import React from 'react'
import {Link} from 'react-router-dom'

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="notfoundpage">Sorry, we couldn't find that page!</h1>
        <img className="error404" src="https://icon2.cleanpng.com/20180602/wll/kisspng-cats-and-the-internet-lolcat-rage-comic-pet-crazy-cat-5b1287740d8f79.8325818015279409800556.jpg" />
        <span />
        <h4 className="notfoundpage">
          If you had a cat...this probably wouldn't be happening...but if you
          must look at some silly <Link to="/products">dog toyz</Link>
        </h4>
      </div>
    )
  }
}

export default PageNotFound
