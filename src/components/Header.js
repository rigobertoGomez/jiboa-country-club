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

class Header extends Component {
  /*constructor(props) {
        super(props)
        this.state = {}
    }*/

  //--------------------------------------------------------------------
  //  Lifecycle methods
  componentDidMount() {
    $(".c-hamburguer").click(function () {
      $(this).toggleClass("on");
    });

    if ($("#app").hasClass("m-color")) {
      $(".menu").removeClass(" menu-full");
    } else {
      $(".menu").removeClass("menu-full active");
    }

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".menu").addClass("menu-full active");
        if ($(".menu-xs").hasClass("open")) {
          $(".menu").addClass("menu-full active");
        }
      } else {
        if ($(".menu-xs").hasClass("open")) {
          $(".menu").addClass("menu-full active");
        } else {
          $(".menu").removeClass("menu-full active");
        }
      }
      if ($(window).scrollTop() <= 50 && $(".menu-xs").hasClass("open")) {
        $(".menu").addClass("menu-full active");
      }
    });

    $(window).resize(function () {
      var windowsize = $(window).width();
      if (windowsize > 991) {
        $(".menu-xs").removeClass("open");
        $(".c-hamburguer").removeClass("on");
      }
    });

    mobileNav();
    function mobileNav() {
      $(".c-hamburguer").on("click", function () {
        $(".menu-xs").toggleClass("open");
        if ($(this).hasClass("is-active")) {
          $(this).removeClass("is-active transition");
          if ($(window).scrollTop() > 50) {
            $(".menu").addClass("menu-full active");
          } else {
            $(".menu").removeClass("menu-full active");
          }
        } else {
          $(this).addClass("is-active");
          $(".menu").addClass("menu-full active");
        }
      });
      $(".menu-xs .content .items .item").on("click", function () {
        hide_mobileNav();
      });
      $(".menu-xs .sub-item").on("click", function () {
        hide_mobileNav();
      });

      function hide_mobileNav() {
        $(".menu-xs").toggleClass("open");
        //$(".menu").removeClass("menu-full active");
        if ($(".menu").hasClass("menu-full active")) {
          $(".menu").removeClass("menu-full active");
          $(this).removeClass("is-active");
        } else {
          $(this).addClass("is-active ");
          $(".menu").addClass("menu-full ");
        }
        if ($(".c-hamburguer").hasClass("on")) {
          $(".c-hamburguer").removeClass("on");
        } else {
          $(this).addClass("is-active");
        }
      }
    }

    //----------------------------------
    // Submenu - Navbar
    $("#sub-menu .sub-item").on("click", function () {
      $("#sub-menu").css({
        opacity: "0",
        transform: "rotateX(-3deg)",
        "-moz-transform": "rotateX(-3deg)",
        "pointer-events": "none"
      });
    });

    $(".item.has-submenu").hover(function () {
      $("#sub-menu").css({
        opacity: "1",
        transform: "rotateX(0)",
        "-moz-transform": "rotateX(0)",
        "pointer-events": "auto"
      });
    });
    $(".item.has-submenu").mouseleave(function () {
      $("#sub-menu").css({
        opacity: "0",
        transform: "rotateX(-3deg)",
        "-moz-transform": "rotateX(-3deg)",
        "pointer-events": "none"
      });
    });


    //--------- 
    // random title header

    var textTry = ['Try for free', 'Sign up free']
    //$(document).ready(function () {
      $("#btn-try").html(textTry[Math.floor(Math.random() * textTry.length)]);
    //});
  }

  render() {
    return (
      <header>
        <div className="menu">
          <div className="content">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-4 col-sm-5 col-6">
                  <NavLink to="/">
                      <img className="ico_logo" src="../img/jiboa-logo.svg" alt=""/>
                  </NavLink>
                </div>
                <div className="col-md-8 col-sm-7 col-6 text-right">
                  <nav className="items">                  
                    <NavLink  className="item" to="/nuestro-club">
                      Nuestro club
                    </NavLink>                  
                    <NavLink  className="item" to="/servicios/casas">
                      Tipos de casas
                    </NavLink>
                    <NavLink data-toggle="modal" data-target="#contactModal" className="item" to="/contactanos" >
                      Contáctanos
                    </NavLink>                                        
                  </nav>
                  <div className="c-hamburguer">
                    <div className="hamburguer-bt__stripe hamburguer-bt__stripe__top" />
                    <div className="hamburguer-bt__stripe hamburguer-bt__stripe__middle" />
                    <div className="hamburguer-bt__stripe hamburguer-bt__stripe__bottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-xs">
          <div className="content">
            <nav className="items">
              <NavLink to="/" className="item">
                Home
              </NavLink>                         
              <NavLink to="/" className="item">
                Plans
              </NavLink>
              <NavLink to="/" className="item">
                API
              </NavLink>
            </nav>         
          </div>
        </div>
      </header>
    );
  }
}

//---------------------------------------------------------------

export default Header;