import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

function CartScreen(props) {
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;
    const Qty=props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const productId = props.match.params.id;
    
    // const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

    const dispatch = useDispatch();

    const removeFromCartHandler = (id) => { 
      dispatch(removeFromCart(id));
    }

    const checkoutHandler = () => {
      props.history.push('/signin?redirect=shipping');
    }
    // const downpagenumber = () =>{
    //   Qty-1>=1? setQty(Qty-1) :setQty(Qty);
    // }
    // const Uppagenumber = () =>{
    //   setQty(Qty+1);
    // }
    useEffect(() => {
        if (productId) {
          dispatch(addToCart(productId,Qty));
        }
      }, []);
    return (
      <div className="checkout mt-5">
        <div className="container">
          <h3 className="animated wow slideInLeft" data-wow-delay=".5s">Your shopping cart contains: <span>3 Products</span></h3>
          <div className="checkout-right animated wow slideInUp" data-wow-delay=".5s">
            <table className="timetable_sub">
              <thead>
                <tr>
                  <th>SL No.</th>	
                  <th>Product</th>
                  <th>Quality</th>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
              {
              cartItems.length === 0 ?
                <div>
                  
              </div>
              :cartItems.map(item=>
                <tr key={item.product} className="rem1">
                  <td className="invert">1</td>
                  <td className="invert-image"><a href="single.html"><img src={item.image} alt=" " className="img-responsive" /></a></td>
                  <td className="invert">
                    <div className="quantity"> 
                      <div className="quantity-select">                           
                        {/* <div onClick={downpagenumber} className="entry value-minus">&nbsp;</div>
                        <div value={item.qty} onChange={(e) => dispatch(addToCart(item.product,e.target.value))} className="entry value"><span>{Qty}</span></div>
                        <div onClick={Uppagenumber} className="entry value-plus active">&nbsp;</div> */}
                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product,e.target.value))} class="custom-select">
                          <option selected>1</option>
                          <option >2</option>
                          <option >3</option>
                          <option >4</option>
                        </select>
                      </div>
                    </div>
                  </td>
                  <td className="invert">{item.name}</td>
                  <td className="invert">{item.brand}</td>
                  <td className="invert">${item.price}</td>
                  <td className="invert">
                    <div className="rem">
                      <div onClick={() => removeFromCartHandler(item.product)} className="close1">
                        <img  src="https://www.pngitem.com/pimgs/m/463-4637625_x-button-close-x-button-png-transparent-png.png" alt=" "/>
                     </div>
                    </div>
                  </td>
                </tr>)
              }
                
                {/*quantity*/}
                {/*quantity*/}
              </tbody></table>
          </div>
          <div className="checkout-left">	
            <div className="checkout-left-basket animated wow slideInLeft" data-wow-delay=".5s">
              <h4>Continue to basket</h4>
              <ul>
              {
              cartItems.length === 0 ?
              <div>
                  
              </div>
              :cartItems.map(item=>
                <li key={item.product}>{item.name} <i>-</i> <span>{item.qty*item.price} </span></li>)}
                <li>Total <i>-</i> <span>$ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</span></li>
              </ul>
            </div>
            <div  onClick={checkoutHandler} className="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
              <button disabled={cartItems.length === 0} href=""><span className="glyphicon glyphicon-menu-left" aria-hidden="true" />Checkout</button>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>

    // ---------------------------
    
    );
        
    
}

export default CartScreen


