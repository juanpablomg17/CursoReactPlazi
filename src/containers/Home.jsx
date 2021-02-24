import React, { useState, useEffect } from "react";
// components
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

// Hooks

import useInitialState from "../hooks/userInitialState";

// assetes
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const Home = () => {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title={"Mi lista"}>
          <Carousel>
            {initialState.mylist.map((item) => {
              return <CarouselItem key={item.id} {...item} />;
            })}
          </Carousel>
        </Categories>
      )}

      <br />
      <br />
      <br />
      <Categories title={"Tendencias"}>
        <Carousel>
          {initialState.trends.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>
      <br />
      <br />
      <br />
      <Categories title={"Originales de Platzi"}>
        <Carousel>
          {initialState.originals.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>
      
      <Footer />
    </div>
  );
};

export default Home;
