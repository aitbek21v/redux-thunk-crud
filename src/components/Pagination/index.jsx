import React from "react";

export default function Pagination({ productPerPage, totalProduct }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      {pageNumber.map((el) => (
        <button
          style={{
            padding: "15px 25px",
            borderRadius: "10px",
            background: "blue",
          }}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
