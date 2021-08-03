/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../Redux/Actions/productAction";
const ProductListing = () => {
  const products = useSelector((state) => state.productListing.products);

  const dispatch = useDispatch();
  useEffect(() => {
    // getProducts();
    dispatch(setProducts());
  }, []);
  // const getProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  const productList =
    products &&
    products.map((product) => {
      const { id, title, price, image } = product;
      return (
        <div className="four wide column" key={id}>
          <Link to={`/product/${id}`}>
            {" "}
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
              </div>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <div>
      <div className="ui three column grid">{productList}</div>
    </div>
  );
};

export default ProductListing;
