import React, { Children, useState } from 'react';
import '../assets/styles/Componets/Carousel.scss';

const Carousel = ({children}) =>{
    return(
        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
        </section>
    );
}

export default Carousel;
