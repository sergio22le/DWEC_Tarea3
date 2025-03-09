import React, { useState } from "react";
import datos from "./data.js";
import Imagenes from "./Imagenes";
import "./index.css";

const Titulo = () => {
    const categorias = [...new Set(datos.map((categ) => categ.categoria))];

    const [indiceCategoria, setIndiceCategoria] = useState(0);
    const [indiceImagen, setIndiceImagen] = useState(0);
    const [contador, setContador] = useState(0);

    const categoriaActual = categorias[indiceCategoria];
    const imagenesPorCategoria = datos.filter((imagen) => imagen.categoria === categoriaActual);

    const cambiarImagen = () => {
        setIndiceImagen(indiceActualImagen => {
            if ((indiceActualImagen + 1) > 2) {
                setIndiceCategoria(indiceActualCategoria => {
                    if ((indiceActualCategoria + 1) > 2) {
                        console.log("Reinicio indice categoria.");
                    return 0;
                    } 
                    console.log("Cambio indice categoria.");
                    return indiceActualCategoria + 1;
                    
                });
                console.log("Reinicio indice imagen.");
                return 0;
            }
            console.log("Cambio indice imagen.");
            return indiceActualImagen + 1;
        });
        renderizar();
    };

    const renderizar = () => {
        setTimeout(() => {
            cambiarImagen();
        }, 10000);
    };

    if (contador === 0) {
        setContador(contadorActual => contadorActual + 1);
        renderizar();
    }

    const lastSlide = (indiceImagen - 1);
    const nextSlide = (indiceImagen + 1);

    return (
        <section className="section">
            <div className="title">
                <h2>slider DWEC</h2>
                <div className="underline"></div>
                <h3>{categoriaActual}</h3>
            </div>
            <div className="section-center">
                {imagenesPorCategoria.map((imagen, indice) => {
                    let clase = "";
                    if (indice === indiceImagen) clase = "activeSlide";
                    if (indice === lastSlide) clase = "lastSlide";
                    if (indice === nextSlide) clase = "nextSlide";

                    return (
                        <Imagenes
                            key={imagen.id}
                            img={imagen.img}
                            src={imagen.src}
                            className={clase}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Titulo;
