import React from "react";
import '../assets/styles/Componets/NotFound.scss';

const NotFound = () => {
  return (
    <>
      <div className="site">
        <div className="sketch">
          <div className="bee-sketch red" />
          <div className="bee-sketch blue" />
        </div>
        <h1>
          404:
          <small>Página no encontrada</small>
        </h1>
      </div>
    </>
  );
};
export default NotFound;
