import React from "react";

function Login(){
    return (
        <div className="login">
            <form>
                <h3>Sign In</h3>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" placeholder="Enter your username" className="form-control" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" placeholder="Enter your password" className="form-control" />
                </div>
            </form>
        </div>    
    )
}

export default Login