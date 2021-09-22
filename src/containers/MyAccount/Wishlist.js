import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import ShapeCircle from '../../components/ShapeCircle/ShapeCircle';
import MyAccountMenu from './menu';
import ProductCard from '../../components/Card/ProductCard';

class Wishlist extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="header-margin">
          <Container fluid={true}>
            <h2 className="mb-4 pt-3">My Account</h2>
            <Row>
              <Col lg="2" md="3" className="d-none d-md-block">
                <div className="pt-5 border-right h-100">
                  <MyAccountMenu />
                </div>
              </Col>
              <Col lg="10" md="9">
                <div className="mb-5">
                  <Row>
                    <Col lg="4" sm="6" className="mb-4">
                      <ProductCard className="m-0" />
                    </Col>
                    <Col lg="4" sm="6" className="mb-4">
                      <ProductCard className="m-0" />
                    </Col>
                    <Col lg="4" sm="6" className="mb-4">
                      <ProductCard className="m-0" />
                    </Col>
                    <Col lg="4" sm="6" className="mb-4">
                      <ProductCard className="m-0" />
                    </Col>
                    <Col lg="4" sm="6" className="mb-4">
                      <ProductCard className="m-0" />
                    </Col>
                    <Col lg="4" sm="6" className="mb-4">
                      <ProductCard className="m-0" />
                    </Col>
                  </Row>
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
  component: Wishlist
}
