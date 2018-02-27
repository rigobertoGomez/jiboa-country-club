//---------------------------------------------------------------
//  Imports
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
//import MainLogo from "../icons/IconLogo";
import $ from 'jquery'

//import styled from "styled-components"

//---------------------------------------------------------------
//  Styles

//---------------------------------------------------------------
//  Code

class Footer extends Component {
    /*constructor(props) {
          super(props)
          this.state = {}
      }*/

    //--------------------------------------------------------------------
    //  Lifecycle methods
    componentDidMount() {

    }

    render() {
        return (
            <footer className="j_footer">
                <div className="container-fluid">
                    <div className="content">
                        <div className="row">

                            <div className="col-md-4 text-center">

                                <div className="f_block">
                                    <img className="ico_logo" src="../img/jiboa-logo.svg" alt="" />
                                    <p className="j_text">Km. 54 1/2 Blvd. <br/> Costa del Sol</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="f_block text-center">
                                    <h3 className="j_title">Contáctanos</h3>
                                    <p className="j_text">Tels. (503) 2264-0205 / 2263-0458</p>
                                    <p className="j_text">Desde E.E.U.U  Tel. (347) 584 4952</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="f_block text-center">
                                    <h3 className="j_title">Siguenos en:</h3>
                                    <a href="https://www.facebook.com/jiboacountryclub" target="_blank">
                                        <svg className="icon-svg" width="40px" height="44px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                            <defs></defs>
                                            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Desktop-HD" transform="translate(-1200.000000, -4719.000000)" fill-rule="nonzero">
                                                    <g id="Footer" transform="translate(0.000000, 4561.000000)">
                                                        <g id="facebook" transform="translate(1200.000000, 158.000000)">
                                                            <path d="M37.2414062,44 L2.75859375,44 C1.24140625,44 0,42.6344531 0,40.9655469 L0,3.03445313 C0,1.36554688 1.24140625,0 2.75859375,0 L37.2414062,0 C38.7585938,0 40,1.36554688 40,3.03445313 L40,40.9655469 C40,42.6344531 38.7585938,44 37.2414062,44" id="Shape" fill="#4F4F4F"></path>
                                                            <path d="M33.6585366,7.33333333 L33.6585366,14.9723052 L27.4516616,14.9723052 C26.6930678,14.9723052 26.0723647,15.6598187 26.0723647,16.5000649 L26.0723647,21.0834307 L32.9689272,21.0834307 L32.9689272,28.722316 L26.0723647,28.722316 L26.0723647,44 L19.1758022,44 L19.1758022,28.7222294 L13.6585366,28.7222294 L13.6585366,21.0833442 L19.1758022,21.0833442 L19.1758022,16.4999784 C19.1758022,11.6874703 22.4861147,7.7152949 26.7619741,7.33333333 L33.6585366,7.33333333 Z" id="Shape" fill="#FFFFFF"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="j_copyright text-center">
                        <p className="j_text">
                            jiboa Country Club El Salvador (c)2018 - Todos los derechos reservados
                        </p>
                    </div>
                </div>
            </footer >
        );
    }
}

//---------------------------------------------------------------

export default Footer;  