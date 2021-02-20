import React, { useState, useEffect } from 'react'
// components
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';


// assetes
import '../assets/styles/App.scss';


const App = () => {
    const [videos, setVideos] = useState([]);

    // este funciona para pasar la data desde la API hasta la app
    
    useEffect(() => {
        const fetchVideos = async () => {
          try {
            const response = await fetch("http://localhost:3000/initalState");
            const data = await response.json();
            setVideos(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchVideos();
      }, []);
    console.log(videos);

    return (
        <div className="App">
            <Header/>
            <Search/>
            <Categories title={"Mi lista"}>
            <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
            </Carousel>
            </Categories>
        <br/>
        <br/>
        <br/>
            <Categories title={"Tendencias"}>
            <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
            </Carousel>
            </Categories>
        <br/>
        <br/>
        <br/>
        <Categories title={"Originales de Platzi"}>
            <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>        
            </Carousel>
            </Categories>


            <Footer/>

        </div>
    );

}

export default App;

