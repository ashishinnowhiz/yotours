import React, { Component, useState } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, Button, Label, FormGroup, Input, Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import VisaSVG from '../../components/svg/visa-svg';
import MasterCardSVG from '../../components/svg/mastercard-svg';
import CityCard1 from '../../components/Card/CityCard1';
import BookingConfirmedModal from '../../components/Modals/BookingConfirmedModal';
import BookingHistoryCard from '../../components/Card/BookingHistoryCard';

class MyCart extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="header-margin">
          <Container fluid={true}>
            <Row>
              <Col lg="9" md="8">
                <div className="my-5">
                  <h2 className="mb-4">My Cart</h2>
                  <BookingHistoryCard />
                  <hr />
                  <BookingHistoryCard />
                  <hr />
                  <BookingHistoryCard />
                  <hr />
                </div>
              </Col>
              <Col lg="3" md="4">
                <div className="border-md-left my-5 pl-md-4">
                  <div className="bg-grey px-3 py-2">
                    <p className="mb-0">No. of tours in cart : <span className="fs-16 text-white fw-sbold">4</span></p>
                  </div>
                  <Table borderless className="border cart-table mb-0">
                    <tbody>
                      <tr>
                        <td width="65%"><small className="text-text">Net Amount</small></td>
                        <td width="35%" className="text-right fw-sbold">$ 520.00</td>
                      </tr>
                      <tr>
                        <td><small className="text-text">Offer discount (5%)</small></td>
                        <td className="text-right fw-sbold">$ 10.00</td>
                      </tr>
                      <tr>
                        <td><small className="text-text">Community Membership discount (11%)</small></td>
                        <td className="text-right fw-sbold">$ 10.00</td>
                      </tr>
                      <tr>
                        <td colSpan="2"><Button color="dotted" className="line-height-32">Add Coupon code</Button></td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <hr className="m-0" />
                        </td>
                      </tr>
                      <tr>
                        <td><small className="text-text">To be paid</small></td>
                        <td className="text-right fw-bold"><del className="strike-through fw-normal text-text">$ 520.00</del><br />$ 520.00</td>
                      </tr>
                      <tr>
                        <td className="bg-light"><small className="text-text">Cashback</small></td>
                        <td className="text-right fw-sbold bg-light">$ 20.00</td>
                      </tr>
                      <tr>
                        <td className="bg-light"><small className="text-text">Total Savings<br />(Cashback + Discounts)</small></td>
                        <td className="text-right fw-sbold bg-light">$ 40.00</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="mb-4"><Button color="primary" block>Proceed to Checkout</Button></div>
                  <p className="mb-1">See Also</p>
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
  component: MyCart
}
