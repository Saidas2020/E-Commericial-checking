import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContextContext'

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
        <button onClick={() => addToCart(props.id)}>Add to Cart</button>
    </div>
  )
}

export default Item