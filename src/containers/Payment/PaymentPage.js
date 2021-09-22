import React, { Component, useState } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, Button, Label, FormGroup, Input, Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import VisaSVG from '../../components/svg/visa-svg';
import MasterCardSVG from '../../components/svg/mastercard-svg';
import CityCard1 from '../../components/Card/CityCard1';
import BookingConfirmedModal from '../../components/Modals/BookingConfirmedModal';

class PaymentPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isModalOpen: false
  }

  toggleModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen})
  }
  render() {
    return (
      <>
        <Header />
        <div className="header-margin">
          <Container fluid={true}>
            <Row>
              <Col lg="9" md="8">
                <div className="my-5">
                  <div className="breadcrumb black mb-4 px-0">
                    <Button color="nothing">&larr;</Button>
                    <ul>
                      <li><NavLink to="/">My Cart</NavLink></li>
                      <li>&gt;</li>
                      <li>Select a payment method</li>
                    </ul>
                  </div>
                  <Label className="mb-3">Saved payment methods</Label>
                  <div className="mb-3">
                    <label className="radio-container"> <VisaSVG className="mr-2" /> <span className="text-grey">5242-XXXXXXXX-8329</span>
                      <input type="radio" name="payment" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="radio-container"> <MasterCardSVG className="mr-2" /> <span className="text-grey">5242-XXXXXXXX-8329</span>
                      <input type="radio" name="payment" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <hr className="my-5" />
                  <Label className="mb-3">Other payment methods</Label>
                  <div className="mb-2">
                    <label className="radio-container"> <span className="text-grey">Netbanking</span>
                      <input type="radio" name="payment" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="ml-3 pl-3">
                    <Row>
                    <Col lg="3" md="6">
                        <FormGroup>
                          <Input type="text" name="country" id="Country" placeholder="Select bank" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="mb-2">
                    <label className="radio-container"> <span className="text-grey">Add Debit / Credit Card</span>
                      <input type="radio" name="payment" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="ml-3 pl-3">
                    <Row>
                      <Col lg="3" md="6">
                        <FormGroup>
                          <Label for="name">Name on card</Label>
                          <Input type="text" name="name" id="name" />
                        </FormGroup>
                      </Col>
                      <Col lg="3" md="6">
                        <FormGroup>
                          <Label for="number">Card Number</Label>
                          <Input type="text" name="number" id="number" />
                        </FormGroup>
                      </Col>
                      <Col lg="3" md="6">
                        <FormGroup>
                          <Label for="expiry">Expires on (MM/YY)</Label>
                          <Input type="text" name="expiry" id="expiry" />
                        </FormGroup>
                      </Col>
                      <Col lg="3" md="6">
                        <FormGroup>
                          <Label for="cvv">CVV</Label>
                          <Input type="text" name="cvv" id="cvv" />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup className="text-md-right">
                          <label className="checkbox-container d-inline-block"> Securely save card details
                        <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="mb-2">
                    <label className="radio-container"> <span className="text-grey">Add UPI</span>
                      <input type="radio" name="payment" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4">
                <div className="border-md-left my-5 pl-md-4">
                  <Table borderless className="border">
                    <tbody>
                      <tr>
                        <td><small className="text-text">To be paid</small></td>
                        <td className="text-right fw-bold">$ 520.00</td>
                      </tr>
                      <tr>
                        <td colSpan="2"><Button onClick={this.toggleModal} color="primary" block>Proceed to pay</Button></td>
                      </tr>
                    </tbody>
                  </Table>
                  <CityCard1 />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <BookingConfirmedModal toggleModal={this.toggleModal} isModalOpen={this.state.isModalOpen}  />
      </>
    )
  }
}


export default {
  component: PaymentPage
}
