import React from "react";
import {Link} from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-bg" />
      <div className="login-container">
        <div className="container">
            <div className="col-lg-12 mb-5">
                <div className="login-header">
                    <h2>Admin Login</h2>    
                    <hr />
                </div>    
            </div>
            <div className="col-lg-7 mx-lg-auto">
                <form  className="row login-form">
                    <div className="col-lg-12 mb-3">
                        <input type="text" className="login-control" placeholder="Username"/>    
                    </div>
                    <div className="col-lg-12 mb-3">
                        <input type="password" className="login-control" placeholder="Password"/>    
                    </div>
                    <div className="col-lg-12 mb-3">
                        <Link to={process.env.PUBLIC_URL + '/console'} className="login-control" > Login </Link>    
                    </div>
                </form>    
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
