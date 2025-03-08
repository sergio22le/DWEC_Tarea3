import React, { useState } from "react";
import datos from "./data.js";
import Imagenes from "./Imagenes";
import "./index.css";


const Titulo = () => {
    const categorias = [...new Set(datos.map(categ => categ.categoria))];

    const [indiceCategoria, setIndiceCategoria] = useState(0);
    const [indiceImagen, setIndiceImagen] = useState(0);

    const categoriaActual = categorias[indiceCategoria];

    const imagenesPorCategoria = datos.filter((imagen) => imagen.categoria === categoriaActual);

    const cambiarImagen = () => {
        setTimeout(() => {
            setIndiceImagen((indice) => {
                if (indice < 2) {
                    return indice + 1;
                } else {
                    return 0;
                }
            }
        )}, 2000);
    }

    const cambiarCategoria = () => {
        setTimeout(() => {
            setIndiceCategoria((indice) => {
                if (indice < 2) {
                    return indice + 1;
                } else {
                    return 0;
                }
            });
            setIndiceImagen(0);
        }, 6000);
    }

    cambiarImagen();
    cambiarCategoria();

    return (
        <section className="section">
            <div className="title">
                <h2>slider DWEC</h2>
                <div className="underline"></div>
                <h3>{categoriaActual}</h3>
            </div>
            <div className="section-center">
                <Imagenes key={imagenesPorCategoria[indiceImagen].id} 
                            img={imagenesPorCategoria[indiceImagen].img} 
                            src={imagenesPorCategoria[indiceImagen].src} 
                            className="activeSlide" />
            </div>
        </section>
    )
}


export default Titulo;