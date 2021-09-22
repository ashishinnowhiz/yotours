import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import ShapeCircle from '../../components/ShapeCircle/ShapeCircle';
import { NavLink } from 'react-router-dom';
import MyAccountMenu from './menu';

class MyProfile extends Component {
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
                  <div className="mb-4 d-inline-block text-center">
                    <ShapeCircle className="xl" />
                    <p className="mt-2"><Button color="nothing" className="text-primary">Change</Button></p>
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
                  </Row>
                  <Row>
                    <Col lg="4">
                      <div className="my-4">
                        <Button color="primary" block>Save changes</Button>
                      </div>
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
  component: MyProfile
}
