import React from "react";
import Navbar from "../component/Navbar";

import FooterCompo from "../component/FooterCompo";
import '../component/style/proyecto.css'
import {
    Casa_Ciotola,
    Casa_da_luce, Casa_Della_Natura, Casa_di_contrasto, Casa_Marte, Casa_Matiz,
    Casa_Piccola,
    Casa_Purpura, Casa_Spring,
    Casa_T,
    Puntos_Altos,
    Stanza_Bianca
} from "../component/proyectos";


class Proyecto extends React.Component {
    constructor() {
        super()
        this.state = {
            Page1: true,
            Page2: false,
            Page3: false
        }
    }

    operation1() {
        this.setState({
            Page1: !this.state.Page1,
            Page2: false,
            Page3: false
        })
    }

    operation2() {
        this.setState({
            Page1: false,
            Page2: !this.state.Page2,
            Page3: false
        })
    }

    operation3() {
        this.setState({
            Page1: false,
            Page2: false,
            Page3: !this.state.Page3
        })
    }

    render() {
        {/*pagina 1*/
        }
        if (this.state.Page1 === true) {
            return (
                <React.Fragment>
                    <Navbar/>
                    <div className="container proyect">

                        {Casa_Della_Natura()}
                        {Casa_T()}

                        {Casa_Piccola()}

                        {Casa_da_luce()}


                    </div>
                    <div className="paginationDiv container">
                        <ul className="pagination">
                            <li className="page-item page-link active" onClick={() => this.operation1()}>1</li>
                            <li className="page-item page-link text-danger" onClick={() => this.operation2()}>2</li>
                            <li className="page-item page-link text-danger" onClick={() => this.operation3()}>3</li>
                            <li className="page-item page-link text-danger" onClick={() => this.operation2()}>Next</li>
                        </ul>
                    </div>
                    <FooterCompo/>
                </React.Fragment>
            )
        }
        {/*pagina 2*/
        }
        if (this.state.Page2 === true) {
            return (
                <React.Fragment>
                    <Navbar/>
                    <div className="container proyect">

                        {Casa_Purpura()}
                        {Stanza_Bianca()}

                        {Puntos_Altos()}

                        {Casa_Ciotola()}


                        <div className="paginationDiv container">
                            <ul className="pagination">
                                <li className="page-item page-link text-danger"
                                    onClick={() => this.operation1()}>Previous
                                </li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation1()}>1</li>
                                <li className="page-item page-link active" onClick={() => this.operation2()}>2</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation3()}>3</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation3()}>Next
                                </li>
                            </ul>
                        </div>
                        <FooterCompo/>
                    </div>
                </React.Fragment>
            )
        }
        {/*pagina 3*/
        }
        if (this.state.Page3 === true) {
            return (
                <React.Fragment>
                    <Navbar/>
                    <div className="container proyect">

                        {Casa_di_contrasto()}

                        {Casa_Matiz()}

                        <div className="paginationDiv container">
                            <ul className="pagination">
                                <li className="page-item page-link text-danger"
                                    onClick={() => this.operation2()}>Previous
                                </li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation1()}>1</li>
                                <li className="page-item page-link text-danger" onClick={() => this.operation2()}>2</li>
                                <li className="page-item page-link active" onClick={() => this.operation3()}>3</li>
                            </ul>
                        </div>
                    </div>
                    <FooterCompo/>
                </React.Fragment>
            )
        }
    }

}

export default Proyecto;