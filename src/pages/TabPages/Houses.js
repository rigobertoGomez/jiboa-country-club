import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const imagesVega = [
  '/img/casas/vega/vega1.jpg',
  '/img/casas/vega/vega2.jpg',
  '/img/casas/vega/vega3.jpg',
  '/img/casas/vega/vega4.jpg',
  '/img/casas/vega/vega5.jpg',
  '/img/casas/vega/vega6.jpg'
];

const imagesHidalgo = [
    '/img/casas/hidalgo/hidalgo1.jpg',
    '/img/casas/hidalgo/hidalgo2.jpg',
    '/img/casas/hidalgo/hidalgo3.jpg',
    '/img/casas/hidalgo/hidalgo4.jpg',
    '/img/casas/hidalgo/hidalgo5.jpg',
    '/img/casas/hidalgo/hidalgo6.jpg'
  ];

class Houses extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          photoIndex2: 0,
          isOpenVega: false,
          isOpenHidalgo: false,
        };
      }
    render() {
        const { photoIndex, isOpenVega } = this.state;
        const { photoIndex2, isOpenHidalgo } = this.state;
        return (
            <div className="houses_page">
                <section className="sec_houses_intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="j_title text-center">TIPOS DE CASAS</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec_list_houses">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 px-0">
                                <div className="house-img">
                                    <div className="h_image" style={{ marginBottom: '50px', 'backgroundImage': 'url(' + process.env.PUBLIC_URL + '/img/hidalgo.jpg' + ')' }}></div>
                                    <div className="h_info">
                                        {/*<p className="j_text">Precio desde $199,800</p>*/}
                                        <button onClick={() => this.setState({ isOpenHidalgo: true })}  className="j_link">VER GALERIA</button>
                                        {isOpenHidalgo && (
                                            <Lightbox
                                              mainSrc={imagesHidalgo[photoIndex2]}
                                              nextSrc={imagesHidalgo[(photoIndex2 + 1) % imagesHidalgo.length]}
                                              prevSrc={imagesHidalgo[(photoIndex2 + imagesHidalgo.length - 1) % imagesHidalgo.length]}
                                              onCloseRequest={() => this.setState({ isOpenHidalgo: false })}
                                              onMovePrevRequest={() =>
                                                this.setState({
                                                  photoIndex2: (photoIndex2 + imagesHidalgo.length - 1) % imagesHidalgo.length,
                                                })
                                              }
                                              onMoveNextRequest={() =>
                                                this.setState({
                                                  photoIndex2: (photoIndex2 + 1) % imagesHidalgo.length,
                                                })
                                              }
                                            />
                                          )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 px-0">
                                <div className="house_content">
                                    <h3 className="j_title">Casa Tipo Hidalgo</h3>
                                    <p className="j_text">
                                        Diseñada especialmente para ofrecer a la familia
                                        los espacios ideales para compartir y descansar
                                        para vivir confortablemente.
                                    </p>
                                    <p className="j_text">
                                        Area de construcción: <br /> 199.43 mt2 (2146.65 ft2) <br /> Lote de 750 v2
                                    </p>
                                    <span className="c_subtitle">1er. Nivel</span>
                                    <p className="j_text">

                                        Sala, Cocina con Pantry, Comedor, Desayunador, Vestíbulo, Baño Social, Habitación Principal con closet y Baño Privado, Bodega, Parqueo.
                                    </p>
                                    <span className="c_subtitle">2do. Nivel</span>
                                    <p className="j_text">
                                        2 Dormitorios con closet, Baño Compartido, Sala familiar, Terraza.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 px-0">
                                <div className="house_content">
                                    <h3 className="j_title">CASA TIPO SACRAMENTO</h3>
                                    <p className="j_text">
                                        Embellece el paisaje de la comunidad Jiboa
                                        Country Club, esta residencia muy bien diseñada
                                        con un pórtico vestíbular que destaca el acento
                                        californiano.
                                        En un sólo nivel se ha logrado una excelente
                                        distribución de espacios.
                                    </p>
                                    <span className="c_subtitle">1er. Nivel</span>
                                    <p className="j_text">
                                        Vestíbulo, Sala, Cocina con Pantry.
                                        Dormitorio Principal con Closet y Baño privado.
                                        2 Dormitorios con Closet y Baño compartido.
                                        Terraza, Pórtico exterior, Parqueo.
                                    </p>
                                    <span className="c_subtitle">Areá de construcción</span>
                                    <p className="j_text">
                                        112.52 mt2 (1211.15 ft2)
                                        Area de Terreno 750 v2
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 px-0">
                                <div className="house-img">
                                    <div className="h_image" style={{ 'backgroundImage': 'url(' + process.env.PUBLIC_URL + '/img/sacramento.jpg' + ')' }}></div>
                                    <div className="h_info text-left">
                                        {/*<p className="j_text">Precio desde $199,800</p>
                                        <a href="" className="j_link">VER GALERIA</a>*/}
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-6 px-0">
                                <div className="house-img">
                                    <div className="h_image" style={{ marginBottom: '50px', 'backgroundImage': 'url(' + process.env.PUBLIC_URL + '/img/lavega.jpg' + ')' }}></div>
                                    <div className="h_info">
                                        {/*<p className="j_text">Precio desde $ 135,000</p>
                                        <span className="j_text">*precios sujetos a cambios sin previo</span>*/}
                                        <button   onClick={() => this.setState({ isOpenVega: true })} className="j_link">VER GALERIA</button>
                                        {isOpenVega && (
                                            <Lightbox
                                              mainSrc={imagesVega[photoIndex]}
                                              nextSrc={imagesVega[(photoIndex + 1) % imagesVega.length]}
                                              prevSrc={imagesVega[(photoIndex + imagesVega.length - 1) % imagesVega.length]}
                                              onCloseRequest={() => this.setState({ isOpenVega: false })}
                                              onMovePrevRequest={() =>
                                                this.setState({
                                                  photoIndex: (photoIndex + imagesVega.length - 1) % imagesVega.length,
                                                })
                                              }
                                              onMoveNextRequest={() =>
                                                this.setState({
                                                  photoIndex: (photoIndex + 1) % imagesVega.length,
                                                })
                                              }
                                            />
                                          )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 px-0">
                                <div className="house_content">
                                    <h3 className="j_title">CASA TIPO LA VEGA </h3>
                                    <p className="j_text">
                                        Este modelo en particular Santa Fé mantiene los
                                        elementos clásicos de la antigua colonia española
                                        Su belleza radica en su sencillez y candor arquitectónico.
                                        Ideal para Casa Campestre con todas las
                                        comodidades para disfrutarla en familia.
                                        Se entrega en colores tierra.
                                </p>
                                    <span className="c_subtitle">1er. Nivel</span>
                                    <p className="j_text">
                                        Sala, Cocina con Pantry, Desayunador, Comedor, <br />
                                        3 Dormitorios, Dormitorio Principal con Closet y Baño Privado. <br />
                                        2 Dormitorios con Closet y Baño compartido, <br />
                                        Terraza, Pórtico exterior y Parqueo.             <br />
                                    </p>
                                    <span className="c_subtitle">Areá de construcción</span>
                                    <p className="j_text">
                                        136.25 mt2 (1467.40 ft2) lote de 750 v2
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
        );
    }
}

export default Houses;
