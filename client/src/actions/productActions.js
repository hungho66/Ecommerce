
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_COUNT_REQUEST,
    PRODUCT_COUNT_SUCCESS,
    PRODUCT_COUNT_FAIL,
    PRODUCT_SEARCH_REQUEST,
    PRODUCT_SEARCH_SUCCESS,
    PRODUCT_SEARCH_FAIL

}
from '../constants/productConstants';
import axios from 'axios';
const listProducts =(pagenumber) => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST, payload:pagenumber});
        const {data} = await axios.get("https://localhost:5001/api/Products/?pageIndex="+ pagenumber);
        dispatch({type:PRODUCT_LIST_SUCCESS, payload:data.data
      });
    }
    catch(error){
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
      const { data } = await axios.get('https://localhost:5001/api/Products/'+ productId);
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
  };

const productcount = () => async(dispatch) =>{
  try{
    dispatch({type:PRODUCT_COUNT_REQUEST});
    const{count} =await axios.get('https://localhost:5001/api/Products');
    dispatch({type: PRODUCT_COUNT_SUCCESS, payload:count.count});
  }
  catch(error){
    dispatch({type:PRODUCT_COUNT_FAIL, payload:error.message});
  }
}
const searchproduct =(brand) => async(dispatch)=>{
  try{
    dispatch({type:PRODUCT_SEARCH_REQUEST,payload:{brand}})
    const {data} = await axios.get("https://localhost:5001/api/Products?Search="+ brand);
    dispatch({type: PRODUCT_SEARCH_SUCCESS, payload:data.data});
  }
  catch(error){
    dispatch({type:PRODUCT_SEARCH_FAIL,payload:error.message})
  }
}
export{
    listProducts,
    detailsProduct,
    productcount,
    searchproduct
};
