import React, { Component } from 'react';
import '../css/ButtonFilter.css';
import ButtonImg from './ButtonImg';

import round from '../assets/Forma/redondo.png'
import princess from '../assets/Forma/princesa.png'
import emerald from '../assets/Forma/esmeralda.png'
import oval from '../assets/Forma/ovalo.png'
import marquise from '../assets/Forma/marquesa.png'
import pear from '../assets/Forma/pera.png'
import asscher from '../assets/Forma/asscher.png'
import heart from '../assets/Forma/corazon.png'
import cushion from '../assets/Forma/cojijn.png'
import baguette from '../assets/Forma/baguette.png'
import trillion from '../assets/Forma/trillon.png'
import radiant from '../assets/Forma/radiante.png'

import transparent from '../assets/Color/incoloro.png'
import barelyColorless from '../assets/Color/casi-incoloro.png'
import lightYellow from '../assets/Color/ligeramente-amarillo.png'
import yellow from '../assets/Color/amarillo-claro.png'

import perfect from '../assets/Claridad/perfecta.png'
import nonVisibleFlaws from '../assets/Claridad/imperfecciones-no-visibles.png'
import tenXFlaws from '../assets/Claridad/imperfecciones-10x.png'
import visibleFlaws from '../assets/Claridad/imperfecciones-simple-vista.png'

import excellent from '../assets/Corte/excelente.png'
import veryGood from '../assets/Corte/muy-bueno.png'
import good from '../assets/Corte/bueno.png'
import regular from '../assets/Corte/regular.png'

class ButtonFilter extends Component{
    

    state = {
        form: '',
        color: '',
        clarity: '',
        cut: ''
    }

    formbuttonLabels = {
        round: "REDONDO",
        princess: "PRINCESA",
        emerald: "ESMERALDA",
        oval: "ÓVALO",
        marquise: "MARQUESA",
        pear: "PERA",
        asscher: "ASSCHER",
        heart: "CORAZÓN",
        cushion: "COJÍN",
        baguette: "BAGUETTE",
        trillion: "TRILLÓN",
        radiant: "RADIANTE"
    }

    colorbuttonLabels = {
        transparent: "TRANSPARENTE",
        barelyColorless: "CASI INCOLORO",
        lightYellow: "LIGERAMENTE AMARILLO",
        yellow: "AMARILLO CLARO"
    }

    claritybuttonLabels = {
        perfect: "PERFECTA",
        nonVisibleFlaws: "IMPERFECCIONES NO VISIBLES",
        tenXFlaws: "IMPERFECCIONES VISIBLES A 10X",
        visibleFlaws: "IMPERFECCIONES VISIBLES A SIMPLE VISTA"
    }

    cutbuttonLabels = {
        excellent: "EXCELENTE (MAXIMO BRILLO)",
        veryGood: "MUY BUENO (MUY BRILLANTE)",
        good: "BUENO (BRILLANTE)",
        regular: "REGULAR (POCO BIRLLANTE)"
    }

    setStates = (event, label) => {
        let name = event.target.getAttribute('label');
        switch (this.props.title) {
            case "FORMA":
                this.setState({ form: name, color: this.state.color, clarity: this.state.clarity, cut: this.state.cut });
                break;
            case "COLOR":
                this.setState({ color: name, form: this.state.form, clarity: this.state.clarity, cut: this.state.cut });
                break;
            case "CLARIDAD":
                this.setState({ clarity: name, color: this.state.color, form: this.state.form, cut: this.state.cut });
                break;
            case "CORTE":
                this.setState({ cut: name, color: this.state.color, clarity: this.state.clarity, form: this.state.form });
                break;
            default:
                break;
        }
    }

    printState = () => {
        console.log(this.state);
    }

    render() {
        switch (this.props.title) {
            case "FORMA":
                return(
                    <div className="table">
                        <div className="title">
                            <p>{this.props.title}</p>
                            <span className="tooltip" onClick={this.printState}>?</span>
                        </div>
                            <div className="row">
                                <ButtonImg setStates={(event) => this.setStates(event)} src={round} label={this.formbuttonLabels.round}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={princess} label={this.formbuttonLabels.princess}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={emerald} label={this.formbuttonLabels.emerald}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={oval} label={this.formbuttonLabels.oval}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={marquise} label={this.formbuttonLabels.marquise}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={pear} label={this.formbuttonLabels.pear}/>
                            </div>
                            <div className="row">
                                <ButtonImg setStates={(event) => this.setStates(event)} parent={this.props.title} src={asscher} label={this.formbuttonLabels.asscher}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} parent={this.props.title} src={heart} label={this.formbuttonLabels.heart}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} parent={this.props.title} src={cushion} label={this.formbuttonLabels.cushion}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} parent={this.props.title} src={baguette} label={this.formbuttonLabels.baguette}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} parent={this.props.title} src={trillion} label={this.formbuttonLabels.trillion}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} parent={this.props.title} src={radiant} label={this.formbuttonLabels.radiant}/>
                            </div>
                    </div>
                )
            
            case "COLOR":
                return(
                    <div className="table">
                        <div className="title">
                            <p>{this.props.title}</p>
                            <span className="tooltip">?</span>
                        </div>
                            <div className="row">
                                <ButtonImg setStates={(event) => this.setStates(event)} src={transparent} label={this.colorbuttonLabels.transparent}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={barelyColorless} label={this.colorbuttonLabels.barelyColorless}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={lightYellow} label={this.colorbuttonLabels.lightYellow}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={yellow} label={this.colorbuttonLabels.yellow}/>
                            </div>
                    </div>
                )
            
            case "CLARIDAD":
                return(
                    <div className="table">
                        <div className="title">
                            <p>{this.props.title}</p>
                            <span className="tooltip">?</span>
                        </div>
                            <div className="row">
                                <ButtonImg setStates={(event) => this.setStates(event)} src={perfect} label={this.claritybuttonLabels.perfect}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={nonVisibleFlaws} label={this.claritybuttonLabels.nonVisibleFlaws}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={tenXFlaws} label={this.claritybuttonLabels.tenXFlaws}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={visibleFlaws} label={this.claritybuttonLabels.visibleFlaws}/>
                            </div>
                    </div>
                )

            case "CORTE":
                return(
                    <div className="table">
                        <div className="title">
                            <p>{this.props.title}</p>
                            <span className="tooltip">?</span>
                        </div>
                            <div className="row">
                                <ButtonImg setStates={(event) => this.setStates(event)} src={excellent} label={this.cutbuttonLabels.excellent}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={veryGood} label={this.cutbuttonLabels.veryGood}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={good} label={this.cutbuttonLabels.good}/>
                                <ButtonImg setStates={(event) => this.setStates(event)} src={regular} label={this.cutbuttonLabels.regular}/>
                            </div>
                    </div>
                )
            
            default:
                return(
                    <>
                        <p>Error</p>
                    </>
                )
        }
    }
}

export default ButtonFilter;