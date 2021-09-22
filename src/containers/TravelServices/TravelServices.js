import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, Card, Button } from "reactstrap";
import CarServiceImg from "../../images/services/car.svg";
import BikeServiceImg from "../../images/services/motorbike.svg";
import CameraServiceImg from "../../images/services/camera.svg";
import HomeServiceImg from "../../images/services/home.svg";
import ClockServiceImg from "../../images/services/checkroom.svg";
import NannyServiceImg from "../../images/services/nanny.svg";
import GuideServiceImg from "../../images/services/guide.svg";
import Footer from '../../components/Footer/Footer';
class TravelServices extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="py-5 mt-5">
          <Container fluid={true}>
            <h2 className="mb-4">Travel Services</h2>
            <h3 className="mb-3">Rental Services</h3>
            <Row>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <Card body className="services-card">
                  <img src={CarServiceImg} alt="" />
                  <p className="text-center mb-0">Car</p>
                </Card>
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <Card body className="services-card">
                  <img src={BikeServiceImg} alt="" />
                  <p className="text-center mb-0">Bike and Bicycle</p>
                </Card>
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <Card body className="services-card">
                  <img src={CameraServiceImg} alt="" />
                  <p className="text-center mb-0">Equipments</p>
                </Card>
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <Card body className="services-card">
                  <img src={HomeServiceImg} alt="" />
                  <p className="text-center mb-0">Apartments</p>
                </Card>
              </Col>
            </Row>
            <h3 className="mb-3 mt-4">Other Services</h3>
            <Row>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <Card body className="services-card">
                  <img src={ClockServiceImg} alt="" />
                  <p className="text-center mb-0">Cloakroom</p>
                </Card>
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <Card body className="services-card">
                  <img src={NannyServiceImg} alt="" />
                  <p className="text-center mb-0">Travel Nanny</p>
                </Card>
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <Card body className="services-card">
                  <img src={GuideServiceImg} alt="" />
                  <p className="text-center mb-0">Guide</p>
                </Card>
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <Card body className="services-card">
                  <img src={HomeServiceImg} alt="" />
                  <p className="text-center mb-0">Apartments</p>
                </Card>
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
  component: TravelServices
}
