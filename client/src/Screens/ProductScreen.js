import React,{useEffect,useState} from 'react';
import {Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import Rating from '../components/Rating';

function ProductScreen(props) {
    //console.log (props.match.params.id)
    // const product = data.products.find(x=> x._id === props.match.params.id);
    const qty = 1;
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(detailsProduct(props.match.params.id));
      return () => {
        //
      };
    }, []);
    const handleAddToCart = () => {
      props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
    };
    //console.log(dispatch(detailsProduct(props.match.params.id)));
    return (
    <div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        {loading? <div>Loading...</div>:
        error?<div>{error}</div>:
        (
          <div className="products">	 
        <div className="container">  
          <div className="single-page">
            <div className="single-page-row" id="detail-21">
              <div className="col-md-6 single-top-left">	
                <div className="flexslider">
                  <ul className="slides">
                    <li data-thumb={product.pictureUrl}>
                      <div className="thumb-image detail_images"> <img src={product.pictureUrl} data-imagezoom="true" className="img-responsive" width="400px" alt="" /> </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 single-top-right">
                <h3 className="item_name"> {product.name}</h3>
                <p>{product.description}</p>
                <div className="single-rating">
                  <ul>
                    <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                    <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                    <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                    <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                    <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                    <li className="rating">20 reviews</li>
                    <li><a href="#">Add your review</a></li>
                  </ul> 
                </div>
                <div className="single-price">
                  <ul>
                    <li>${product.price}</li>  
                    <li><del>$60</del></li> 
                    <li><span className="w3off">10% OFF</span></li> 
                    <li>Ends on: Oct,15th</li>
                  </ul>	
                </div>
                <div className="btn_sumit">
                  <button onClick={handleAddToCart} type="submit" className="w3ls-cart"><i className="fa fa-cart-plus" aria-hidden="true" /> Add to cart</button>
                  <button className="w3ls-cart w3ls-cart-like"><i className="fa fa-heart-o" aria-hidden="true" /> Add to Wishlist</button>
                </div>                                
              </div>
              <div className="clearfix"> </div>  
            </div>
          </div> 
          {/* collapse-tabs */}
          
          {/* //collapse */} 
        </div>
      </div>

          // ----------------------------

          
        )
        }
        
    </div>
    )
}

export default ProductScreen
