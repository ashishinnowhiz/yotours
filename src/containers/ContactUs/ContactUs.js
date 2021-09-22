import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, Button } from 'reactstrap';
import CityCard1 from '../../components/Card/CityCard1';
import { NavLink } from 'react-router-dom';
import PhoneSVG from '../../components/svg/phone-svg';
import EmailSVG from '../../components/svg/email-svg';

class ContactUs extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="header-margin">
          <Container fluid={true}>
            <Row>
              <Col lg="9" md="8">
                <div className="breadcrumb black px-0 mb-5">
                  <div className="pt-2 mr-3">
                    <Button color="nothing">&larr;</Button>
                  </div>
                  <h2>Contact Us</h2>
                </div>
                <Row>
                  <Col md="6">
                    <h4>Yo Tours India</h4>
                    <p>Yo Tours<sup>™</sup> C-1002 Unnati Dham,<br />Katraj Kondhwa Road,<br />Pune - 411048<br />Maharashtra, India</p>
                    <p><a className="text-primary word-break-all" target="_blank" href="https://goo.gl/maps/DGc1aLxdc1BdUts47">https://goo.gl/maps/DGc1aLxdc1BdUts47</a></p>
                  </Col>
                  <Col md="6">
                    <h4>Yo Tours Europe</h4>
                    <p>YO TOURS B.V.<br />Keizersgracht 482,<br />1017EG Amsterdam<br />Netherlands</p>
                    <p><a className="text-primary word-break-all" target="_blank" href="https://goo.gl/maps/DGc1aLxdc1BdUts47">https://goo.gl/maps/DGc1aLxdc1BdUts47</a></p>
                  </Col>
                </Row>
                <hr className="mb-5" />
                <Row>
                  <Col lg="4" className="mb-4">
                    <div className="shape-name contact-us">
                      <div className="shape-circle image"><PhoneSVG /></div>
                      <div className="shape-text">
                        <p><a href="tel:918448448434">+91 844 844 8434</a></p>
                        <p>Phone Support (IVR)</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" className="mb-4">
                    <div className="shape-name contact-us">
                      <div className="shape-circle image"><EmailSVG /></div>
                      <div className="shape-text">
                        <p><a href="mailto:connect@yotours.in">connect@yotours.in</a></p>
                        <p>For booking related matters</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" className="mb-4">
                    <div className="shape-name contact-us">
                      <div className="shape-circle image"><EmailSVG /></div>
                      <div className="shape-text">
                        <p><a href="mailto:info@yotours.in">info@yotours.in</a></p>
                        <p>Phone Support (IVR)</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="3" md="4">
                <div className="border-md-left my-5 pl-md-4">
                  <div className="mb-4">
                    <CityCard1 />
                  </div>
                  <CityCard1 />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}


export default {
  component: ContactUs
}
