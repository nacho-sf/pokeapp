import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import ListaPokemon from "./ListaPokemon";
import Form from "./Form";
import Details from "./Details"
import NotFound from "./NotFound"

const Main = () => {

  return <main>
    <Routes>
      <Route element={<Home/>} path={"/"}/>        
      <Route element={<ListaPokemon/>} path={"/search"}/>
      <Route element={<Form/>} path={"/new"}/>
      <Route element={<Details/>} path={"/pokemon/:id"}/>
      <Route element={<NotFound/>} path={"/*"}/>
    </Routes>
  </main>;
}

export default Main;
