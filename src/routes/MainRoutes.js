import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Edit from "../pages/Edit";

export default function MainRoutes() {
  const PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/basket", element: <Home />, id: 2 },
    { link: "/favorite", element: <Home />, id: 3 },
    { link: "/admin", element: <Admin />, id: 4 },
    { link: "/edit/:id", element: <Edit />, id: 4 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
}
