import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Admin/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getOneProduct } from "../../asyncfunction";
import { useParams } from "react-router-dom";

export default function Edit() {
  const [inputValue, setInputValue] = useState({
    name: "",
    price: "",
    image: "",
  });
  //   console.log(inputValue);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { oneProduct } = useSelector((state) => state.update);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id]);

  //   console.log(oneProduct);
  useEffect(() => {
    if (oneProduct) {
      setInputValue({
        ...inputValue,
        name: oneProduct.name,
        price: oneProduct.price,
        image: oneProduct.image,
      });
    }
  }, [oneProduct]);

  const handleSaveChange = () => {
    dispatch(editProduct(id,inputValue))
  }
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin-inputs">
            <h1>Edit Product</h1>
            <TextField
              value={inputValue.name}
              sx={{ width: "100%" }}
              id="standard-basic"
              label="name"
              variant="standard"
              onChange={(e) => setInputValue({...inputValue,name:e.target.value})}

            />
            <TextField
              value={inputValue.price}
              sx={{ width: "100%" }}
              id="standard-basic"
              label="price"
              variant="standard"
              onChange={(e) => setInputValue({...inputValue,price:e.target.value})}

            />
            <TextField
              value={inputValue.image}
              sx={{ width: "100%" }}
              id="standard-basic"
              label="image"
              variant="standard"
              onChange={(e) => setInputValue({...inputValue,image:e.target.value})}
            />
            <Button onClick={handleSaveChange} sx={{ width: "100%" }} variant="outlined">
              Outlined
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
