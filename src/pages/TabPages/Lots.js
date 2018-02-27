import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES =
    [{
        src: "/img/lotes/lotes1.jpg",
        thumbnail: "/img/lotes/lotes1.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 80,
        isSelected: false,
    },

    {
        src: "/img/lotes/lotes2.jpg",
        thumbnail: "/img/lotes/lotes2.jpg",
        thumbnailWidth: 80,
        thumbnailHeight: 'auto',
        isSelected: false,
    }]
class Lots extends Component {
    render() {
        console.log('llegue a lotes')
        return (
            <div className="lots_page">
                <section className="sec_lots_intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1 className="j_title text-center">LOTES</h1>
                                    <p className="j_text">
                                        Cada lote permite jardines amplios y áreas verdes abundantes, para los amantes de las plantas y hortalizas. Existen diferentes planes desde los 5 años hasta los 15 años y puede adquirir lotes desde 750 varas cuadradas.
                                        Al comprar un lote automáticamente usted podra disfrutar de todos los beneficios que le ofrece Jiboa Country Club.
                                        Nuestra residencial Jiboa Country Club es exclusiva en una área campestre para que pueda disfrutar su tranquilidad fuera del bullicio de la ciudad.
                              </p>
                                    <div style={{ display: 'block', overflow: 'auto', 'marginBottom': '80px' }}>
                                        <Gallery enableImageSelection={false} images={IMAGES} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Lots;
