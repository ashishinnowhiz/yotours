import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import { Container, Row, Col } from 'reactstrap';
import CityVlogCard from '../../components/Card/CityVlogCard';

class CityVlogs extends Component {
  render() {
    return (
      <>
        <Header className="on-banner" />
        <Banner className="no-margin" />
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-3">City Vlogs</h2>
            <Row>
              <Col md="6" className="mb-4">
                <CityVlogCard
                  cardclassName="light"
                />
              </Col>
              <Col md="6" className="mb-4">
                <CityVlogCard
                  cardclassName="dark"
                />
              </Col>
              <Col md="6" className="mb-4">
                <CityVlogCard
                  cardclassName="dark"
                />
              </Col>
              <Col md="6" className="mb-4">
                <CityVlogCard
                  cardclassName="light"
                />
              </Col>
              <Col md="6" className="mb-4">
                <CityVlogCard
                  cardclassName="light"
                />
              </Col>
              <Col md="6" className="mb-4">
                <CityVlogCard
                  cardclassName="dark"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    )
  }
}

export default {
  component: CityVlogs
}