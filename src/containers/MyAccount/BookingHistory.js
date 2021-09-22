import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, Button } from 'reactstrap';
import MyAccountMenu from './menu';
import BookingHistoryCard from '../../components/Card/BookingHistoryCard';

class BookingHistory extends Component {
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
                  <div className="bg-light py-2 px-3 mb-3">
                    <h4 className="mb-0 fw-normal">
                      <span className="mr-3">25 December 2020</span>
                      <Button color="nothing" className="text-primary mr-3">Download Invoice</Button>
                      <Button color="nothing" className="text-primary">Download Tickets</Button>
                    </h4>
                  </div>
                  <BookingHistoryCard />
                  <hr />
                  <BookingHistoryCard />
                  <hr />
                  <BookingHistoryCard />
                  <hr />
                  <div className="bg-light py-2 px-3 mb-3">
                    <h4 className="mb-0 fw-normal">
                      <span className="mr-3">24 December 2020</span>
                      <Button color="nothing" className="text-primary mr-3">Download Invoice</Button>
                      <Button color="nothing" className="text-primary">Download Tickets</Button>
                    </h4>
                  </div>
                  <BookingHistoryCard />
                  <hr />
                  <BookingHistoryCard />
                  <hr />
                  <BookingHistoryCard />
                  <hr />
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
  component: BookingHistory
}
