import React from "react";
import {Link} from 'react-router-dom';
import './styles.css';

function Login(){
    return (
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary" >
            <div className="form_container p-5 rounded bg-white">
                <form> 
                    <h3 className="text-center">Sign In</h3>
                    <div className="mb-2">
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" placeholder="Enter your username" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password: </label>
                        <input type="text" id="password" placeholder="Enter your password" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" className='custom-control custom-checkbox' id="check"/>
                        <label htmlFor="check" className="custom-control-label ms-2">
                            Remember me
                        </label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-justify mt-2">
                        Don't have an account?  <Link to='/signup' className="ms-2" > Sign up here!</Link>
                    </p>
                </form>
            </div>
        </div>    
    )
}

export default Login