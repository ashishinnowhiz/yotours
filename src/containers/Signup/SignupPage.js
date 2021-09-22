import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import ShapeCircle from '../../components/ShapeCircle/ShapeCircle';

class SignupPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="header-margin">
          <Container fluid={true}>
            <Row>
              <Col lg="9" md="8">
                <div className="my-5">
                  <h2 className="mb-4">SignUp</h2>
                  <div className="mb-4">
                    <ShapeCircle className="xl" />
                  </div>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <Label for="FirstName">First Name</Label>
                        <Input type="text" name="fname" id="FirstName" />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Label for="LastName">Last Name</Label>
                        <Input type="text" name="lname" id="LastName" />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Label for="Email">E-mail</Label>
                        <Input type="text" name="lname" id="Email" />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Label for="DateOfBirth">Date of birth</Label>
                        <Input type="text" name="dob" id="DateOfBirth" />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Label for="Country">Country</Label>
                        <Input type="text" name="country" id="Country" />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Label for="City">City</Label>
                        <Input type="text" name="city" id="City" />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Label for="WNo">WhatsApp Number</Label>
                        <Input type="text" name="wno" id="WNo" />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <div className="d-flex flex-column flex-sm-row justify-content-sm-between">
                          <Label for="PNo">Phone Number</Label>
                          <label className="checkbox-container mb-3 mb-sm-0"> Same as WhatsApp Number
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <Input type="text" name="pno" id="PNo" />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <div>
                          <Label for="PNo">Anniversary Date (Optional)</Label>
                        </div>
                        <Input type="text" name="pno" id="PNo" />
                      </FormGroup>
                    </Col>
                    <Col lg="12">
                      <FormGroup className="mt-4">
                        <label className="checkbox-container"> I have read terms and conditions and I am authorizing Yo Tours to send me relevant information.
                        <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <div className="my-4">
                        <Button color="primary" block>Create account</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg="3" md="4">
                <div className="border-md-left my-5 pl-md-4">
                  <div className="bg-light p-3 mt-5">
                    <p className="text-grey"><strong>As a community member, you will get the following benefits.</strong></p>
                    <ul className="dash-grey">
                      <li>Lifetime membership for free</li>
                      <li>Exciting offers for community members</li>
                      <li>Added features for personalized tours</li>
                      <li>Get early information on new events and experiences</li>
                      <li>Lifetime membership for free</li>
                      <li>Exciting offers for community members</li>
                      <li>Added features for personalized tours</li>
                      <li>Get early information on new events and experiences</li>
                    </ul>
                    <div>
                      <Button color="border" className="wrap-btn" block>Free Lifetime Membership&nbsp;&rarr;</Button>
                    </div>
                  </div>
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
  component: SignupPage
}
