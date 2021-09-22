import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, Button } from "reactstrap";
import Partner1Img from '../../images/partners/1.png';
import Partner2Img from '../../images/partners/2.png';
import Partner3Img from '../../images/partners/3.png';
import Partner4Img from '../../images/partners/4.png';
import Partner5Img from '../../images/partners/5.png';
import Partner6Img from '../../images/partners/6.png';
import Partner7Img from '../../images/partners/7.png';
import Partner8Img from '../../images/partners/8.png';
import Partner9Img from '../../images/partners/9.png';
import Partner10Img from '../../images/partners/10.png';
import Partner11Img from '../../images/partners/11.png';
import Partner12Img from '../../images/partners/12.png';
import Partner13Img from '../../images/partners/13.png';
import Partner14Img from '../../images/partners/14.png';
import Partner15Img from '../../images/partners/15.png';
import Partner16Img from '../../images/partners/16.png';
import Footer from '../../components/Footer/Footer';
class SellOurExperiences extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="py-5 mt-5">
          <Container fluid={true}>
            <Row>
              <Col lg="5" className="mb-lg-0 mb-4">
                <h2 className="mb-4">Sell our experiences</h2>
                <p>All major Online Travel Agents (OTAs), Online Experience Aggregators, Premium Hotels, Backpacking Hostels, Budget Hotels and Travel Agents of the world sell our tours and activities.</p>
                <p>If you wish to sell our tours, kindly hit the 'Sell Our Experiences' button, or you can also write to us at <a className="text-primary" href="mailto:info@yotours.in">info@yotours.in</a></p>
                <Button color="border">Sell Our Experiences &rarr;</Button>
              </Col>
              <Col lg="7">
                <Row>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner1Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner2Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner3Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner4Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner5Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner6Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner7Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner8Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner9Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner10Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner11Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner12Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner13Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner14Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner15Img} className="img-fluid" alt="" />
                  </Col>
                  <Col md="2" sm="3" xs="6" className="mb-4">
                    <img src={Partner16Img} className="img-fluid" alt="" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    )
  }
}


export default {
  component: SellOurExperiences
}
