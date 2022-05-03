import React from "react";
import Layout from "../../layout/layout.component";

const AddProduct = () => {
  return (
    <>
      <Layout>
        <form className="row pt-3">
          <div className="col-lg-12 mb-3">
            <label htmlFor="game_name" className="form-label">
              ชื่อเกม
            </label>
            <input type="text" name="game_name" className="login-control" />
          </div>
          <div className="col-lg-4 mb-3">
            <label htmlFor="type" className="form-label">
              ประเภทเกม
            </label>
            <input type="text" name="type" className="login-control" />
          </div>
          <div className="col-lg-4 mb-3">
            <label htmlFor="stock" className="form-label">
              จำนวนสินค้า
            </label>
            <input type="text" name="stock" className="login-control" />
          </div>
          <div className="col-lg-4 mb-3">
            <label htmlFor="price" className="form-label">
              ราคา
            </label>
            <input type="text" name="price" className="login-control" />
          </div>

          <div className="col-lg-12 d-flex gap-3 justify-content-between">
            <div className="w-100">
              <label htmlFor="price" className="form-label">
                รูปปกเกม
              </label>
              <input type="file" name="price" className="login-control" />
            </div>
            <div className="w-100 d-flex align-items-end justify-content-end">
                <button className="btn-submit">เพิ่มเกม</button>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default AddProduct;
