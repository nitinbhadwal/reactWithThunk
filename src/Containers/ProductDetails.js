/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedProducts, resetProduct } from "../Redux/Actions/productAction";
const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.product);
  const { image, title, price, category, description } = productDetails;
  console.log(productDetails);
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetails();
    }

    return () => {
      dispatch(resetProduct());
    };
  }, [productId]);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(selectedProducts(response.data));
  };

  return (
    <div className="ui grid container">
      {Object.keys(productDetails).length === 0 ? (
        <h1>loading...</h1>
      ) : (
        <div className="ui card">
          <div className="image">
            <img src={image} alt={image} />
          </div>
          <div className="content">
            <a className="header">{title}</a>
            <div className="meta">
              <span className="date">{category}</span>
            </div>
            <div className="description">{description}</div>
          </div>
          <div className="extra content">
            <a>
              Price:
              {price}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
