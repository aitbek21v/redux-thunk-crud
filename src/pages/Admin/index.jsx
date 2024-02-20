import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { addProduct, getProduct } from "../../asyncfunction";
export default function Admin() {
  const [inputValue, setInputValue] = useState({
    name: "",
    price: "",
    image: "",
  });
  const dispatch = useDispatch();

  const addNewProduct = (inputValue) => {
    dispatch(addProduct(inputValue));
    dispatch(getProduct())
  };

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin-inputs">
            <h1>Add Product</h1>
            <TextField
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
              sx={{ width: "100%" }}
              id="standard-basic"
              label="name"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setInputValue({ ...inputValue, price: e.target.value })
              }
              sx={{ width: "100%" }}
              id="standard-basic"
              label="price"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setInputValue({ ...inputValue, image: e.target.value })
              }
              sx={{ width: "100%" }}
              id="standard-basic"
              label="image"
              variant="standard"
            />
            <Button
              onClick={() => addNewProduct(inputValue)}
              sx={{ width: "100%" }}
              variant="outlined"
            >
              Outlined
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
