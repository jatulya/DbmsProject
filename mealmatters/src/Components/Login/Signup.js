import React from 'react';
import './styles.css';

/*const [selectedValue, setSelectedValue] = useState('');
/*const handleChange = (event) => {
            setSelectedValue(event.target.value);
        };*/

function Signup () {
    return (          
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary" >
        <div className="form_container p-5 rounded bg-white">
            <form> 
                <h3 className="text-center">Sign Up</h3>
                <div className="mb-2">
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="username" placeholder="Enter your email id" className="form-control" />
                </div>
                <div className="mb-2">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" placeholder="Enter your username" className="form-control" />
                </div>
                <div className="mb-2">
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" placeholder="Enter your password" className="form-control" />
                </div>
                <div className="mb-2">
                    <label htmlFor="addr">Address: </label>
                    <input type="text" id="addr" placeholder="Enter your Address" className="form-control" />
                </div>
                <div className="mb-2">
                    <label htmlFor="pin">Pin Number </label>
                    <input type="text" id="pin" placeholder="Enter your pin number" className="form-control" />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            
            </form>
        </div>
    </div>
    )
}

export default Signup