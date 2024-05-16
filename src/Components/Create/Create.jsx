/* eslint-disable no-unused-vars */
import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Header/Header";
import ProductContext from "../../context/ProductContext";
import Spinner from "../spinner/Spinner";

const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { addProduct } = useContext(ProductContext);

  const handleImage = (e) => {
    let img = e.target.files;
    setImages([...img]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await addProduct(title, Category, price, images);
    console.log(res);
    if (res.success) {
      toast.success("product added");
      navigate("/");
    } else {
      toast.error("failed to add product");
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              placeholder="Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              placeholder="Category"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <br />

            <br />
            <input
              type="file"
              onChange={handleImage}
              accept="image/*"
              multiple
              required
            />
            <br />
            <div className="my-2 flex items-center gap-10 flex-wrap">
              {images?.map((image, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(image)}
                  alt="image"
                  width="150px"
                  height="150px"
                />
              ))}
            </div>
            {/* <img alt="Posts" width="200px" height="200px" src=""></img> */}

            <br />
            <div className="">
              {loading ? (
                <Spinner />
              ) : (
                <button className="uploadBtn">upload and Submit</button>
              )}
            </div>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
