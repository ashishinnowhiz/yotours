import React from 'react'
import { Container, Col, Row, Button, Card, UncontrolledCollapse } from 'reactstrap';
import HomeIllusImg from '../../images/home_illus.svg';

const community = () => {
  return(
    <section className="py-5">
    <Container fluid={true}>
      <Row>
        <Col md="6">
          <img src={HomeIllusImg} alt="" className="img-fluid mb-4 mb-md-0" />
        </Col>
        <Col md="6">
          <h2 className="mb-3">Be a part of a community of conscious travelers</h2>
          <p>As a Yo Tour community member, you will get</p>
          <ul className="dash-grey">
            <li>Lifetime membership for free</li>
            <li>Exciting offers for community members</li>
            <li>Added features for personalized tours</li>
            <li>Get early information on new events and experiences</li>
          </ul>
          <Button color="primary">Free Lifetime Membership &rarr;</Button>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default community