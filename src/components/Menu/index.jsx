import React, { useEffect, useState } from "react";
import "./index.scss";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../asyncfunction";
import Pagination from "../Pagination";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const { product } = useSelector((s) => s.main);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currenProduct = product.slice(firstProductIndex, lastProductIndex);

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const deleteCurrentProduct = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProduct());
  };
  return (
    <div id="menu">
      <div className="container">
        <div className="menu">
          {currenProduct.map((el) => (
            <Card
              key={el.id}
              sx={{
                width: 345,
                height: 450,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "20px 0",
                // justifyContent: "center",
              }}
            >
              <CardMedia
                sx={{ height: 100, width: 300, paddingTop: 25 }}
                image={el.image}
                title="green iguana"
              />
              <CardContent>
                <Box
                  sx={{
                    width: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {el.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.price}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <BookmarkBorderIcon sx={{ color: "black" }} />
                </Button>
                <Button size="small">
                  <ChangeCircleIcon
                  onClick={() => navigate(`/edit/${el.id}`)}
                  sx={{ color: "black" }} />
                </Button>
                <Button size="small">
                  <DeleteIcon
                    onClick={() => deleteCurrentProduct(el.id)}
                    sx={{ color: "black" }}
                  />
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
        <div className="pagination">
          <div className="pagination-box">
            <Pagination
              productPerPage={productPerPage}
              totalProduct={product.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
