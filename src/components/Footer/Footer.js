import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import PhoneSVG from '../svg/phone-svg';
import EmailSVG from '../svg/email-svg';
import FacebookSVG from '../svg/facebook-svg';
import YoutubeSVG from '../svg/youtube-svg';
import InstagramSVG from '../svg/instagram-svg';
import TwitterSVG from '../svg/twitter-svg';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container fluid={true}>
          <Row>
            <Col lg="2" sm="6" className="mb-4 mb-lg-0">
              <div className="footer-logo">
                <div className="mb-3">
                  <NavLink to=""><img src={Logo} alt="YoTours" /></NavLink>
                </div>
                <div className="mb-2">
                  <a href="www.google.com"><img src="" alt="" /></a>
                </div>
                <div>
                  <a href="www.google.com"><img src="" alt="" /></a>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6" className="mb-4 mb-lg-0">
              <div className="footer-contact">
                <ul>
                  <li>
                    <div className="shape-name">
                      <div className="shape-circle image"><PhoneSVG /></div>
                      <div className="shape-text">
                        <p><a href="tel:918448448434">+91 844 844 8434</a></p>
                        <p>Phone Support (IVR)</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="shape-name">
                      <div className="shape-circle image"><EmailSVG /></div>
                      <div className="shape-text">
                        <p><a href="mailto:connect@yotours.in">connect@yotours.in</a></p>
                        <p>For booking related matters</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="shape-name">
                      <div className="shape-circle image"><EmailSVG /></div>
                      <div className="shape-text">
                        <p><a href="mailto:info@yotours.in">info@yotours.in</a></p>
                        <p>Phone Support (IVR)</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="5" sm="6" className="mb-4 mb-lg-0">
              <div className="footer-cities">
                <h4>CITIES</h4>
                <ul>
                  <li><NavLink to="">Berlin</NavLink></li>
                  <li><NavLink to="">Madrid</NavLink></li>
                  <li><NavLink to="">Zurich</NavLink></li>
                  <li><NavLink to="">Berlin</NavLink></li>
                  <li><NavLink to="">Madrid</NavLink></li>
                  <li><NavLink to="">Amsterdam</NavLink></li>
                  <li><NavLink to="">Zurich</NavLink></li>
                  <li><NavLink to="">Madrid</NavLink></li>
                  <li><NavLink to="">Zurich</NavLink></li>
                  <li><NavLink to="">Berlin</NavLink></li>
                  <li><NavLink to="">Amsterdam</NavLink></li>
                  <li><NavLink to="">Zurich</NavLink></li>
                  <li><NavLink to="">Berlin</NavLink></li>
                  <li><NavLink to="">Madrid</NavLink></li>
                  <li><NavLink to="">Zurich</NavLink></li>
                  <li><NavLink to="">Zurich</NavLink></li>
                </ul>
              </div>
            </Col>
            <Col lg="2" sm="6" className="mb-4 mb-lg-0">
              <div className="footer-links">
                <h4>USEFUL LINKS</h4>
                <ul>
                  <li><NavLink to="">About Us</NavLink></li>
                  <li><NavLink to="">Contact Us</NavLink></li>
                  <li><NavLink to="">FAQs</NavLink></li>
                  <li><NavLink to="">Careers</NavLink></li>
                  <li><NavLink to="">Media</NavLink></li>
                  <li><NavLink to="">Legal</NavLink></li>
                  <li><NavLink to="">Substainable Travel</NavLink></li>
                  <li className="social">
                    <a href=""><FacebookSVG /></a>
                    <a href=""><YoutubeSVG /></a>
                    <a href=""><InstagramSVG /></a>
                    <a href=""><TwitterSVG /></a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="mt-3">
              <p className="text-center">&copy; 2016 - 2019 Yo Tours</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
export default Footer