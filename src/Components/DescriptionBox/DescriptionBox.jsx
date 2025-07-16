import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
    <div className="descriptionbox-navigator">
      <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
     </div>
     <div className="descriptionbox-description">
      <p>An e-commerce website is an Online platform that facilates buying and selling of products or services over the internet </p>
      <p>
        E-commerce websites typically display products or services srtailed description images,prices,and any available
      </p>
     </div>
    </div>
  )
}

export default DescriptionBox