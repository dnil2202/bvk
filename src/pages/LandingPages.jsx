import React from 'react'
import pictCat from '../asset/img/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg'
import ListLanding from '../component/ListLanding'

const LandingPages = () => {
  return (
    <div>
      <img src={pictCat} />
      <div>
        <ListLanding/>
      </div>
    </div>
  )
}

export default LandingPages