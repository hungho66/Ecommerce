import { CART_ADD_ITEM, 
        CART_REMOVE_ITEM,
} 
from "../constants/cartConstants";
import Axios from "axios";


const addToCart = (productId, qty) => async (dispatch, getState) =>{
  // const[product,setproduct]=useState('');
    try{
        const { data } = await Axios.get('https://localhost:5001/api/Products/'+ productId);
    dispatch({
      type: CART_ADD_ITEM, payload: {
        product: data.id,
        name: data.name,
        image: data.pictureUrl,
        price: data.price,
        brand: data.productBrand,
        type:data.productType,
        // countInStock: data.Quantity,
        qty,
        
      }
    });    
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
    }catch(error){
        
    }
}
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}
export {addToCart,
  removeFromCart};