import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import Gallery from 'react-grid-gallery';

const imagesClub = [
  '/img/club/club1.jpg',
  '/img/club/club2.jpg',
  '/img/club/club3.jpg',
  '/img/club/club4.jpg',
  '/img/club/club5.jpg',
  '/img/club/club6.jpg'
];
const IMAGES =
  [{
    src: "/img/estilodevida/stv1.jpg",
    thumbnail: "/img/estilodevida/stv1.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 80,
    isSelected: false,
  },

  {
    src: "/img/estilodevida/stv2.jpg",
    thumbnail: "/img/estilodevida/stv2.jpg",
    thumbnailWidth: 80,
    thumbnailHeight: 'auto',
    isSelected: false,
  },

  {
    src: "/img/estilodevida/stv3.jpg",
    thumbnail: "/img/estilodevida/stv3.jpg",
    thumbnailWidth: 'auto',
    thumbnailHeight: 'auto',
    isSelected: false,
  },
  {
    src: "/img/estilodevida/stv4.jpg",
    thumbnail: "/img/estilodevida/stv4.jpg",
    thumbnailWidth: 'auto',
    thumbnailHeight: 'auto',
    isSelected: false,
  },
  {
    src: "/img/estilodevida/stv5.jpg",
    thumbnail: "/img/estilodevida/stv5.jpg",
    thumbnailWidth: 'auto',
    thumbnailHeight: 'auto',
    isSelected: false,
  }]


class ClubPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpenClub: false,

    };
  }


  render() {
    const { photoIndex, isOpenClub } = this.state;

    return (
      <div className="club_page">
        <section className="sec_home_hero" style={{ 'backgroundImage': 'url(' + process.env.PUBLIC_URL + '/img/lifestyle2.jpg' + ')' }}>
          <div className="overlay">

          </div>
        </section>
        <section className="club_page_info">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content">
                  <h1 className="j_title">NUESTRO CLUB</h1>
                  <p className="j_text">Al adquirir su vivienda en Jiboa Country Club automáticamente usted se  convierte en miembro vitalicio del club recibiendo los múltiples beneficios que ofrecen nuestras instalaciones tales como: el uso de una amplia área social, piscinas para adulto y niños, zona verde, rancho para hamacas, cancha de tenis, cancha de voleibol de playa, cancha de basquetbol y cancha de Futbol.</p>
                  <p className="j_text">
                    La Costa del Sol sea convertido en el polo turístico de mayor auge en El Salvador. Con toda la riqueza que ofrecen las espléndidas playas de la Costa. Una variedad de restaurantes y ranchos de platillos costeños le dan servicio a todo el Boulevard. Hoteles de todas las capacidades reciben a cientos de turistas de todas las partes del mundo. Jiboa Club y su anexo de Playa será para sus miembros el lugar de reposo y esparcimiento ideal. Reserve ya su Casa en Jiboa Country Club y disfrute de todos sus privilegios
                  </p>
                  <button onClick={() => this.setState({ isOpenClub: true })} className="j_link">VER GALERIA</button>
                  {isOpenClub && (
                    <Lightbox
                      mainSrc={imagesClub[photoIndex]}
                      nextSrc={imagesClub[(photoIndex + 1) % imagesClub.length]}
                      prevSrc={imagesClub[(photoIndex + imagesClub.length - 1) % imagesClub.length]}
                      onCloseRequest={() => this.setState({ isOpenClub: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + imagesClub.length - 1) % imagesClub.length,
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % imagesClub.length,
                        })
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="club_lyfestyle">
          <div className="bg_block"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content">
                  <h3 className="j_title text-center">Estilo de vida</h3>
                  <div className="lifestyle_image" style={{ marginBottom: '50px', 'backgroundImage': 'url(' + process.env.PUBLIC_URL + '/img/cancha-volleybol.jpg' + ')' }}> </div>
                  <div style={{ display: 'block', overflow: 'auto', 'marginBottom': '80px' }}>
                    <Gallery enableImageSelection={false} images={IMAGES} />
                  </div>
                  <p className="j_text">
                    Vida al aire libre y muchos momentos de placer… Sol, agua, aire… y mucho verde para correr y explorar los mas bellos paisajes campestres.
                  </p>
                  <p className="j_text">
                    Con vigilancia las 24 horas toda la comunidad Jiboa disfruta de mucha tranquilidad y paz.
                    El ambiente familiar propio de una villa residencial en el campo, hace del Club Jiboa  una experiencia reconfortable.
                    La Comunidad Jiboa reúne arquitectura, naturaleza y grandes momentos de placer como extraordinarios atardeceres, vuelos silvestres, cánticos de golondrina, comidas típicas, hamacas meciéndose, café de olla, un buen libro y muchas sonrisas juntas.
                    Vivir como siempre lo ha soñado es posible en Jiboa Country Club, visitemos, comuníquese con nosotros y conozca nuestros accesibles planes de financiamiento para compra de Lotes y Casas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec_home_club">
          <div className="d-flex block_flex">
            <div className="club_cover" style={{ 'backgroundImage': 'url(' + process.env.PUBLIC_URL + '/img/cover_beach1.jpg' + ')' }}>
            </div>
            <div className="content">
              <div className="c_info">
                <h1 className="j_title">LA COSTA DEL SOL</h1>
                <p className="j_text">
                  En el corazón de la Costa del Sol, Jiboa Country Club cuenta con anexo de playa. Para ofrecer a todos los propietarios una estadía junto al mar con todas las comodidades.
            </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ClubPage;
