import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect,useState } from 'react';
import { listProducts,productcount,searchproduct } from '../actions/productActions';
import Product from '../components/Product'
import Rating from '../components/Rating';
import '.././index.css';


export default function HomeScreen() {
  const [brand, setbrand] = useState('');
  const [page, setPage] = useState(1);
  const productList = useSelector((state) => state.productList);
  const productlistcount=useSelector((state)=>state.productcount);
  const search=useSelector((state)=>state.productsearch)
  const { products, loading, error } = productList;
  const{product}=search;
  const{count}=productlistcount;
  const dispatch = useDispatch();
  const downpagenumber = () =>{
    page-1>=1? setPage(page-1):setPage(page)
  }
  const Uppagenumber = () =>{
    page+1<=18/6?setPage(page+1):setPage(page)
    // setPage(page+1)
  }
  useEffect(() => {
    dispatch(listProducts(page));
    
    return () => {
          //
    };
}, [page]);
  useEffect(()=>{
    dispatch((searchproduct(brand)));

    return()=>{
      //
    }
  },[brand])
    return (      
      <div>
        <div htmlFor="search" className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Tìm kiếm" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setbrand(e.target.value)} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>
        <ul className="products animated wow slideInLeft" data-wow-delay=".5s">
        {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))
        }
        </ul>
        <div className="pagination">
          <li className="li_pagination">
            <img className="img_pagination" src="https://img.icons8.com/carbon-copy/2x/chevron-left.png" onClick={downpagenumber}/>
          </li>
          <li className="li_pagination">
            <img className="img_pagination" src="https://img.icons8.com/carbon-copy/2x/chevron-right.png" onClick={Uppagenumber}/>
          </li>          
        </div>
      </div>
    );      
}

