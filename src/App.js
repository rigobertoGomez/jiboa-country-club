import React, { Component } from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />

        <div className="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title " id="exampleModalLabel">Contáctanos</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="contact_form">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />                    
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">E-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                    
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Télefono</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"  />
                  </div> 
                  <div className="form-group">
                    <label for="exampleInputPassword1">País</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"  />
                  </div> 
                  <div className="form-group">
                    <label for="exampleInputPassword1">Comentario</label>
                    <textarea type="text" className="form-control" id="exampleInputPassword1" />
                  </div>                 
                  <button type="submit" className="j_link">Enviar</button>
                </form>
              </div>
              <div className="modal-footer">
               
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
