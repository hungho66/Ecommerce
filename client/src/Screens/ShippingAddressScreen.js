import React,{useState} from 'react'
import CheckoutSteps from '../components/CheckoutSteps';
// import '.././index.css';

function ShippingAddressScreen() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [street, setstreet] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [zipCode, setzipCode] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="firstName">firstName</label>
                    <input
                    type="text"
                    id="firstName"
                    placeholder="Enter firstName"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    required> 
                    </input>
                </div>
                <div>
                    <label htmlFor="lastName">lastName</label>
                    <input
                    type="text"
                    id="lastName"
                    placeholder="Enter lastName"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    required> 
                    </input>
                </div>
                <div>
                    <label htmlFor="street">street</label>
                    <input
                    type="text"
                    id="street"
                    placeholder="Enter street"
                    value={street}
                    onChange={(e) => setstreet(e.target.value)}
                    required> 
                    </input>
                </div>
                <div>
                    <label htmlFor="city">city</label>
                    <input
                    type="text"
                    id="city"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    required> 
                    </input>
                </div>
                <div>
                    <label htmlFor="state">state</label>
                    <input
                    type="text"
                    id="state"
                    placeholder="Enter state"
                    value={state}
                    onChange={(e) => setstate(e.target.value)}
                    required> 
                    </input>
                </div>
                <div>
                    <label htmlFor="zipCode">zipCode</label>
                    <input
                    type="text"
                    id="zipCode"
                    placeholder="Enter zipCode"
                    value={zipCode}
                    onChange={(e) => setzipCode(e.target.value)}
                    required> 
                    </input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>    
    )
}

export default ShippingAddressScreen
