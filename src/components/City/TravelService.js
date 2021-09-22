import React from 'react'
import { Container, Row, Col, Card, Button } from "reactstrap";

import CarServiceImg from "../../images/services/car.svg";
import BikeServiceImg from "../../images/services/motorbike.svg";
import CameraServiceImg from "../../images/services/camera.svg";
import HomeServiceImg from "../../images/services/home.svg";
import ClockServiceImg from "../../images/services/checkroom.svg";
import NannyServiceImg from "../../images/services/nanny.svg";
import GuideServiceImg from "../../images/services/guide.svg";

const travelService = props => {
  return(
    <section className="py-5">
    <Container fluid={true}>
      <h2 className="mb-3">Travel Services in Vienna</h2>
      <Row>
        <Col lg="3" className="mb-4">
          <Card body className="services-card">
            <img src={CarServiceImg} alt="" />
            <p className="text-center mb-0">Car</p>
          </Card>
        </Col>
        <Col lg="3" className="mb-4">
          <Card body className="services-card">
            <img src={BikeServiceImg} alt="" />
            <p className="text-center mb-0">Bike and Bicycle</p>
          </Card>
        </Col>
        <Col lg="3" className="mb-4">
          <Card body className="services-card">
            <img src={CameraServiceImg} alt="" />
            <p className="text-center mb-0">Equipments</p>
          </Card>
        </Col>
        <Col lg="3" className="mb-4">
          <Card body className="services-card">
            <img src={HomeServiceImg} alt="" />
            <p className="text-center mb-0">Apartments</p>
          </Card>
        </Col>
        <Col lg="3" className="mb-4">
          <Card body className="services-card">
            <img src={ClockServiceImg} alt="" />
            <p className="text-center mb-0">Cloakroom</p>
          </Card>
        </Col>
        <Col lg="3" className="mb-4">
          <Card body className="services-card">
            <img src={NannyServiceImg} alt="" />
            <p className="text-center mb-0">Travel Nanny</p>
          </Card>
        </Col>
        <Col lg="3" className="mb-4">
          <Card body className="services-card">
            <img src={GuideServiceImg} alt="" />
            <p className="text-center mb-0">Guide</p>
          </Card>
        </Col>
        <Col lg="3" className="mb-4">
          <Card body className="services-card">
            <img src={HomeServiceImg} alt="" />
            <p className="text-center mb-0">Apartments</p>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default travelService;