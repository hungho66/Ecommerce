import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';


function Product(props) {
    const qty=1;
    const { product } = props;
    const handleAddToCart = () => {
        props.history.push('/cart/'+ product.id +'?qty=' + qty);       
    };

    return (
        <li key={product.id}>
        <div className="product-grid2 transmitv">
        <div className="product-image2">
        <Link to={'/product/' + product.id}>
        <img className="pic-1 img-fluid" src={product.pictureUrl} />
        <img className="pic-2 img-fluid" src={product.pictureUrl} />
        </Link>
        <ul className="social">
        <li><a href="#" data-tip="Quick View"><span className="fa fa-eye" /></a></li>
        <li><a href="#" data-tip="Add to Cart"><span className="fa fa-shopping-bag" /></a>
        </li>
      </ul>
      <div className="transmitv single-item">
        <button onClick={handleAddToCart} type="submit" className="transmitv-cart ptransmitv-cart add-to-cart">
            Add to Cart
        </button>
        {/* <form action="#" method="post">
          
        </form> */}
      </div>
    </div>
    <div className="product-content">
    <Link to={'/product/' + product.id}>
      <h3 className="title">{product.name}</h3>
      <span className="price">${product.price}</span>
      </Link>
    </div>
  </div>
      </li>
    )
}

export default Product
