import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import ShapeCircle from '../../components/ShapeCircle/ShapeCircle';
import MyAccountMenu from './menu';
import { NavLink } from 'react-router-dom';

class YoCredit extends Component {
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
                  <p className="text-grey mb-1">Your YO TOUR CREDIT balance is</p>
                  <h2 className="primary-font">$ 15.00</h2>
                  <h3 className="primary-font mt-4">Refer and Earn</h3>
                  <p>Earn more YO TOURS CREDIT by referring your friends.</p>
                  <p>For each friend you refer, you get $ 5.00 as YO TOUR CREDIT, up to a maximum of $ 30.</p>
                  <p>To refer a friend, share the following code with them.</p>
                  <p><Button color="dotted">TY6363</Button></p>
                  <p><NavLink to="" className="text-primary">View terms and conditions for referring</NavLink></p>
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
  component: YoCredit
}
