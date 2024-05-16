/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { useParams } from 'react-router-dom';
import ProductContext from '../../context/ProductContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';


function View() {

  const [imgIndex, setImgIndex] = useState(0);
  const { id } = useParams();
  const { products, user } = useContext(ProductContext);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={products[Number(id)]?.imageUrls[imgIndex]}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {products[Number(id)]?.price} </p>
          <span>{products[Number(id)]?.title}</span>
          <p>{products[Number(id)]?.Category}</p>
          <span>{products[Number(id)]?.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{user?.displayName}</p>
          
          
        </div>
      </div>
    </div>
  );
}
export default View;
