import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, Button } from 'reactstrap';
import VisaSVG from '../../components/svg/visa-svg';
import MasterCardSVG from '../../components/svg/mastercard-svg';
import MyAccountMenu from './menu';

class SavedPaymentMethods extends Component {
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
                <div className="mb-5 payment-page">
                  <Row>
                    <Col sm="6">
                      <p className="pt-1">
                        <VisaSVG className="mr-2" /> <span className="text-grey">5242-XXXXXXXX-8329</span>
                      </p>
                    </Col>
                    <Col sm="6" className="text-sm-right mb-4 mb-sm-0">
                      <Button color="border">Delete</Button>
                    </Col>
                  </Row>
                  <hr className="mt-0" />
                  <Row>
                    <Col sm="6">
                      <p className="pt-1">
                        <MasterCardSVG className="mr-2" /> <span className="text-grey">5242-XXXXXXXX-8329</span>
                      </p>
                    </Col>
                    <Col sm="6" className="text-sm-right mb-4 mb-sm-0">
                      <Button color="border">Delete</Button>
                    </Col>
                  </Row>
                  <hr className="mt-0" />
                  <Button color="border">Add new payment method</Button>
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
  component: SavedPaymentMethods
}
