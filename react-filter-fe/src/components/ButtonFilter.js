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

    // stateChanger = this.props.stateChanger;
    

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

    render() {
        switch (this.props.title) {
            case "FORMA":
                return(
                    <div className="table">
                        <div className="title">
                            <p>{this.props.title}</p>
                            <span className="tooltip">?</span>
                        </div>
                            <div className="row">
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={round} label={this.formbuttonLabels.round}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={princess} label={this.formbuttonLabels.princess}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={emerald} label={this.formbuttonLabels.emerald}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={oval} label={this.formbuttonLabels.oval}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={marquise} label={this.formbuttonLabels.marquise}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={pear} label={this.formbuttonLabels.pear}/>
                            </div>
                            <div className="row">
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} parent={this.props.title} src={asscher} label={this.formbuttonLabels.asscher}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} parent={this.props.title} src={heart} label={this.formbuttonLabels.heart}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} parent={this.props.title} src={cushion} label={this.formbuttonLabels.cushion}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} parent={this.props.title} src={baguette} label={this.formbuttonLabels.baguette}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} parent={this.props.title} src={trillion} label={this.formbuttonLabels.trillion}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} parent={this.props.title} src={radiant} label={this.formbuttonLabels.radiant}/>
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
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={transparent} label={this.colorbuttonLabels.transparent}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={barelyColorless} label={this.colorbuttonLabels.barelyColorless}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={lightYellow} label={this.colorbuttonLabels.lightYellow}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={yellow} label={this.colorbuttonLabels.yellow}/>
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
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={perfect} label={this.claritybuttonLabels.perfect}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={nonVisibleFlaws} label={this.claritybuttonLabels.nonVisibleFlaws}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={tenXFlaws} label={this.claritybuttonLabels.tenXFlaws}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={visibleFlaws} label={this.claritybuttonLabels.visibleFlaws}/>
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
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={excellent} label={this.cutbuttonLabels.excellent}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={veryGood} label={this.cutbuttonLabels.veryGood}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={good} label={this.cutbuttonLabels.good}/>
                                <ButtonImg optSelected={this.props.optionSelected} stateChanger={this.props.stateChanger} src={regular} label={this.cutbuttonLabels.regular}/>
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