import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="w-100" />
      <div className="admin-navbar-list">
        <Link to={process.env.PUBLIC_URL + "/console"}>สินค้าทั้งหมด</Link>
        <Link className="brand-logo" to="#">
          โลโก้ร้าน
        </Link>
        <Link to={process.env.PUBLIC_URL + "/console/add_product"}>
          เพิ่มสินค้า
        </Link>
      </div>
      <div className="d-flex w-100 navbar-logout justify-content-end align-items-center">
        <Link to={process.env.PUBLIC_URL + "/admin"}>ออกจากระบบ</Link>
      </div>
    </nav>
  );
};

export default Navbar;
