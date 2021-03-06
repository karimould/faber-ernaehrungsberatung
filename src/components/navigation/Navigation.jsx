import React from "react";
import PropTypes from "prop-types";
import { slide as Menu } from "react-burger-menu";
import { Link } from "gatsby";
import logo from "../../img/FBR-logo-sw.svg";
import logoBurger from "../../img/FBR-logo-sw1.svg";
import closeBurgerButton from "../../img/close-menu.svg";
import "./navigation.scss";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "45px",
    height: "25px",
    right: "32px",
    top: "32px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    margin: "24px 40px"
  }
};

const Navigation = ({ pageName }) => (
  // let choice;
  // if (pageChoice === 'referenzen') {
  //   choice = 'subnav-content-container';
  //   return choice;
  // }
  // if (pageChoice !== 'referenzen') {
  //   choice = 'subnav-content-container-other';
  //   return choice;
  // }

  <div className="navigation-container">
    <div className="navigation-flex">
      <div className="image-container">
        <Link to="/">
          <img alt="LOGO" src={logo} />
        </Link>
      </div>
      <div id="menu" className="navigation-menu">
        <ul>
          <li>
            <Link className="color" title="zu der Startseite" to="/">
              Start
            </Link>
          </li>
          <div className="subnav">
            <li>
              <Link
                className="color"
                title="zu den Leistungen"
                to="/leistungen"
              >
                Unsere Leistungen
              </Link>
            </li>
            <div
              className={
                pageName === "leistungen" ? "triangle" : "triangle-other"
              }
            />
            <div
              className={
                pageName === "leistungen"
                  ? "subnav-content-container"
                  : "subnav-content-container-other"
              }
            >
              <div className="subnav-content">
                <Link
                  title="zu dem Angebot für Ernährungsbearatung "
                  to="/leistungen#ernaehrung"
                >
                  Ernährungsberatung
                </Link>
                <Link
                  title="zu dem Angebot für Coaching"
                  to="/leistungen#coaching"
                >
                  Coaching
                </Link>
                <Link
                  title="zu dem Angebot für Nährwertanalyse"
                  to="/leistungen#naehrwertanalyse"
                >
                  Nährwertanalyse
                </Link>
                {/* <Link to="/leistungen#seminare">Seminare und Vorträge</Link> */}
              </div>
            </div>
          </div>
          <li>
            <Link className="color" title="unsere Kunden" to="/referenzen">
              Referenzen
            </Link>
          </li>
          <li>
            <Link
              className="color"
              title="mehr information über uns"
              to="/ueberuns"
            >
              Über uns
            </Link>
          </li>
          <li>
            <Link title="zum Blog" className="color" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link title="zu der Kontakt Seite" className="color" to="/kontakt">
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              className="color"
              title="zu der Hannover Seite"
              to="/hannover"
            >
              Hannover
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="burgerMenu-container">
      <Menu
        styles={styles}
        className="bm-menu"
        customCrossIcon={<img src={closeBurgerButton} alt="close button" />}
        right
        width="100%"
      >
        <div className="burgerMenu-logo">
          <Link to="/">
            <img alt="LOGO" src={logoBurger} />
          </Link>
        </div>
        <div className="burgerMenu-content burger-items">
          <Link to="leistungen" title="zu den Leistungen" className="menu-item">
            Unsere <br className="burgerMenu-br" /> Leistungen
          </Link>
          <Link to="/referenzen" title="unsere Kunden" className="menu-item">
            Referenzen
          </Link>
          <Link
            to="/ueberuns"
            title="mehr information über uns"
            className="menu-item"
          >
            Über uns
          </Link>
          <Link to="/blog" title="zum Blog" className="menu-item">
            Blog
          </Link>
          <Link
            to="/kontakt"
            title="zu der Kontakt Seite"
            className="menu-item"
          >
            Kontakt
          </Link>
          <Link
            to="/hannover"
            title="zu der Hannover Seite"
            className="menu-item"
          >
            Hannover
          </Link>
        </div>
      </Menu>
    </div>
  </div>
);
export default Navigation;

Navigation.propTypes = {
  pageName: PropTypes.string
};
