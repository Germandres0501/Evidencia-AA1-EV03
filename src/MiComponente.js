import React, { useState, useEffect } from 'react';
import './MiComponente.css';

function MiComponente() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [counter, setCounter] = useState(0);

    // Efecto para generar partículas al pasar el ratón
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    // Efecto para la animación inicial
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // Incrementar contador
    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    return (
        <div
            className={`mi-componente ${isAnimating ? 'animated' : ''}`}
            onMouseMove={handleMouseMove}
        >
            {/* Icono decorativo */}
            <span className="icono">✨</span>

            {/* Título con efecto neón */}
            <h2>Este es mi primer componente</h2>

            {/* Contenido principal con efecto luminoso */}
            <p>¡Estoy aprendiendo React y creando componentes interactivos!</p>

            {/* Contenido adicional con destacados */}
            <h3>Características destacadas</h3>
            <p>
                Este componente tiene <span className="destacado">efectos visuales</span> y
                es totalmente <span className="destacado">interactivo</span>.
            </p>

            {/* Botón con contador */}
            <button className="boton" onClick={incrementCounter}>
                Haz clic aquí ({counter})
            </button>

            {/* Partículas decorativas */}
            <div className="particula"></div>
            <div className="particula"></div>
            <div className="particula"></div>
            <div className="particula"></div>

            {/* Partícula que sigue al ratón */}
            <div
                className="particula-mouse"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    opacity: mousePosition.x > 0 ? 0.7 : 0
                }}
            ></div>
        </div>
    );
}

export default MiComponente;