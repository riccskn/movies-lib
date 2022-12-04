import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movie from "./pages/Movie";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path={"movie/:id"} element={<Movie/>}></Route>
        <Route path={"search"} element={<Search/>}></Route>
      </Routes>
  </BrowserRouter>
);
