import React from 'react'
import {Link} from 'react-router-dom'

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="notfoundpage">Sorry, we couldn't find that page!</h1>
        <img src="https://lh3.googleusercontent.com/PZ6iYQfmI5C37J6TVEFqHE8FtOgv68aQXAje0aLoix4de0fTqEVs-ILbS9vvbwxu1moFfsjRpdlqr8YFqyIDCCSWErEazLvajE8eYw180zqL_fNgo9YR_IPqfey57-mv8HlgB8wZx5I=w561-h315-p-k" />
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
