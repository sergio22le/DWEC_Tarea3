import React from "react";
import "./index.css";

const Imagenes = ({img, src, className}) => {
    return (
        <article className={className}>
            <img src={src} alt={img} className="person-img" />
            <h4>{img}</h4>
        </article>
    )
}

export default Imagenes;