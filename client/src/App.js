
import React from 'react';
import './App.css'
import HomeScreen from './Screens/HomeScreen';
import Home from './Screens/Home'
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import SigninScreen from './Screens/SigninScreen';
import RegisterScreen from './Screens/RegisterScreen';
import { signout } from './actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state)=>state.cart);
  const {cartItems} = cart;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

    return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">Shoes_ST</Link>
      </div>
      <div className="header-links">
      {/* <div className="search-box">
        <div id="sb-search" className="sb-search">
          <form>
            <input className="sb-search-input" placeholder="Enter your search term..." type="search" id="search" />
            <input className="sb-search-submit" type="submit" defaultValue />
            <span className="sb-icon-search"> </span>
          </form>
        </div>
      </div> */}
        <Link to="/cart">
          Cart
          {cartItems.length >0 && 
          <span className="badge">{cartItems.length}</span>}
        </Link>
        {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.displayName} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  {/* <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li> */}
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}       
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <a href="index.html">Adidas</a>
        </li>

        <li>
          <a href="index.html">Converse</a>
        </li>
 
        <li>
          <a href="index.html">Vans</a>
        </li>
      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Route path="/signin" component={SigninScreen} />
        <Route path="/RegisterScreen" component={RegisterScreen} /> 
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/products" component={HomeScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/" exact={true} component={Home}></Route>
      </div>
    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}
export default App;
