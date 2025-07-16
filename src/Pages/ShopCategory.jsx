import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContextContext'
import dropdown_icon from '../../src/assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  const normalizedCategory = props.category.toLowerCase().replace(/s$/, ''); 

  {
    all_product
      .filter(item => item.category === normalizedCategory)
    .map((item, i) => (
      <Item key={i} {...item} />
    ))
  }

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt=""/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products 
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product
          .filter(item => item.category === normalizedCategory)
          .map((item, i) => (
            <Item key={i} {...item} />
          ))}

      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory