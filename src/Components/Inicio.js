import React from "react";
import carru1 from '../Images/portada1.jpeg';
import './Inicio.css';
import {Container} from "react-bootstrap";

export default function Inicio() {
    return (
        <React.Fragment>
            <div className={'backgroundInicio'}>
                <img className="imgcarusel" src={carru1} alt="imgCarusel1"/>
                <Container>
                    <p className={'InicioDescrip'}>
                        Ayudamos a crear espacios únicos, sustentables, inteligentes y eficientes para viviendas
                        unifamiliares, mejorando la calidad de vida de las personas.
                    </p>
                </Container>

            </div>
        </React.Fragment>
    );
}