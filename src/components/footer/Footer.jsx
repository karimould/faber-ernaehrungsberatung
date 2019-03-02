import React from 'react';
import './footer.scss';
import Link from 'gatsby-link';
import instagram from '../../img/socialmedia/instagram.svg';
import facebook from '../../img/socialmedia/facebook.svg';
import p1 from '../../img/partner/partner_agentur_strasse.svg';
import p2 from '../../img/partner/partner_akbulut_kuchen.svg';
import p3 from '../../img/partner/partner_alex_strasser.svg';
import tuv from '../../img/partner/tuv.png';

const Footer = () => (
  <footer className="container-full">
    <div className="row social-media-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.tuev-sued.de/home_de"
        title="facebook"
      >
        <img src={facebook} alt="facebook logo" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.tuev-sued.de/home_de"
        title="instagram"
      >
        <img src={instagram} alt="instagram logo" />
      </a>
    </div>
    <div className="container footer-navigation">
      <div className="col-xs-12 col-sm-6 col-lg-3">
        <h4>Auszeichnungen</h4>
        <p>Staatlich geprüft</p>
        <p>TÜV-Süd</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tuev-sued.de/home_de"
          title="zu tuv süd"
        >
          <img src={tuv} alt="Logo des Tüv süd als Auszeichnung" />
        </a>
      </div>
      <div className="col-xs-12 col-sm-6 col-lg-3">
        <h4>Unternehmen</h4>
        <ul>
          <Link to="#" title="zu der über uns seite">
            <li>Über uns</li>
          </Link>
          <Link to="#" title="zu der kontakt seite">
            <li>Kontakt</li>
          </Link>
          <Link to="#" title="zum impressum">
            <li>Impressum</li>
          </Link>
          <Link to="#" title="zum Pressebereich">
            <li>Press</li>
          </Link>
        </ul>
      </div>
      <div className="col-xs-12 col-sm-6 col-lg-3">
        <h4>Support</h4>
        <ul>
          <Link to="#" title="zu den cookie informationen">
            <li>Cookies</li>
          </Link>
          <Link to="#" title="zu der Datenschutzseite">
            <li>Datenschutz</li>
          </Link>
          <Link to="#" title="zu den AGBS">
            <li>AGB</li>
          </Link>
        </ul>
      </div>

      <div className="col-xs-12 col-sm-6 col-lg-3 partner-container">
        <h4>Unsere Partner</h4>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tuev-sued.de/home_de"
          title="zu Partner Alex Strasser"
        >
          <img src={p1} alt="Logo des Tüv süd als Auszeichnung" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tuev-sued.de/home_de"
          title="zum Partner Akbulut Küchentechnik"
        >
          <img src={p2} alt="Logo des Tüv süd als Auszeichnung" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tuev-sued.de/home_de"
          title="Zum Partner Agentur Strasser"
        >
          <img src={p3} alt="Logo des Tüv süd als Auszeichnung" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;