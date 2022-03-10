import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar.component";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="layout-container">
          <div className="side-img d-lg-block d-none" />
        <div className="container">
          <div className="row">
            <div style={{height: '90vh' , overflowY:'scroll'}} className="col-lg-8 offset-lg-4">
                {children}    
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
