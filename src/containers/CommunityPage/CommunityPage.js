import React, { Component } from 'react';
import Slider from "react-slick";
import Header from '../../components/Header/Header';
import { Container, Row, Col, Button, UncontrolledCollapse, Input, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import ReactPlayer from "react-player";
import Image1 from '../../images/community/1.svg';
import Image2 from '../../images/community/2.svg';
import Image3 from '../../images/community/3.svg';
import Footer from '../../components/Footer/Footer';
import TestimonialCard1 from '../../components/Card/TestimonialCard1';
import { NavLink } from 'react-router-dom';
class CommunityPage extends Component {
  render() {
    var settings2 = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
    return (
      <>
        <Header />
        <section className="py-5 mt-5">
          <Container fluid={true} className="py-md-5">
            <Row>
              <Col md="6" lg="5" className="mb-md-0 mb-4 py-md-5">
                <h2 className="mb-4">What is Yo Tours community of conscious travelers ?</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                <Button color="primary">Free Lifetime Membership &rarr;</Button>
              </Col>
              <Col md="6" lg="7">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=MRI8ffYKA8c"
                  playing={false}
                  width="100%"
                  height="100%"
                  controls
                  className="resp-video-iframe"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-4 text-center">What do you get by being part of the Yo Tour community ?</h2>
            <Row className="my-5">
              <Col lg="1">
              </Col>
              <Col lg="6" md="6">
                <div className="py-md-5">
                  <img src={Image1} alt="" className="img-fluid d-md-none mb-4" />
                  <h3 className="mb-3">Exciting offers on all tours</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                </div>
              </Col>
              <Col lg="4" md="6" className="d-none d-md-block">
                <img src={Image1} alt="" className="img-fluid" />
              </Col>
              <Col lg="1">
              </Col>
            </Row>
            <Row className="my-5">
              <Col lg="1">
              </Col>
              <Col lg="4" md="6" className="d-none d-md-block">
                <img src={Image2} alt="" className="img-fluid" />
              </Col>
              <Col lg="6" md="6">
                <div className="py-md-5">
                  <img src={Image2} alt="" className="img-fluid d-md-none mb-4" />
                  <h3 className="mb-3">Added features for personalized tours</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                </div>
              </Col>
              <Col lg="1">
              </Col>
            </Row>
            <Row className="my-5">
              <Col lg="1">
              </Col>
              <Col lg="6" md="6">
                <div className="py-md-5">
                  <img src={Image3} alt="" className="img-fluid d-md-none mb-4" />
                  <h3 className="mb-3">Lifetime membership for free</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                </div>
              </Col>
              <Col lg="4" md="6" className="d-none d-md-block">
                <img src={Image3} alt="" className="img-fluid" />
              </Col>
              <Col lg="1">
              </Col>
            </Row>
            <Row className="my-5">
              <Col lg="1">
              </Col>
              <Col lg="4" md="6" className="d-none d-md-block">
                <img src={Image2} alt="" className="img-fluid" />
              </Col>
              <Col lg="6" md="6">
                <div className="py-md-5">
                  <img src={Image2} alt="" className="img-fluid d-md-none mb-4" />
                  <h3 className="mb-3">Get early information on new events and experiences</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                </div>
              </Col>
              <Col lg="1">
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-50 bg-grey">
          <Container fluid={true}>
            <Row>
              <Col md="6" className="mb-4 mb-md-0">
                <h2 className="mb-4 text-white">Meet our community members</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.</p>
                <Button color="border">Discover more &rarr;</Button>
              </Col>
              <Col md="6">
                <Slider className="normal-slick-slider px-4" {...settings2}>
                  <TestimonialCard1 />
                  <TestimonialCard1 />
                  <TestimonialCard1 />
                  <TestimonialCard1 />
                  <TestimonialCard1 />
                  <TestimonialCard1 />
                  <TestimonialCard1 />
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-4 text-center">Frequently asked questions</h2>
            <div className="collapse-con">
              <Button color="nothing" id="toggler1">
                Can I book on my own ?
                  </Button>
              <UncontrolledCollapse toggler="#toggler1">
                <div className="collapse-body">
                  <p>Lorem Ipsum</p>
                </div>
              </UncontrolledCollapse>
            </div>
            <div className="collapse-con">
              <Button color="nothing" id="toggler2">
                What is the weather like ?
                  </Button>
              <UncontrolledCollapse toggler="#toggler2">
                <div className="collapse-body">
                  <p>Lorem Ipsum</p>
                </div>
              </UncontrolledCollapse>
            </div>
            <div className="collapse-con">
              <Button color="nothing" id="toggler3">
                Can I store my luggage somewhere ?
                  </Button>
              <UncontrolledCollapse toggler="#toggler3">
                <div className="collapse-body">
                  <p>Lorem Ipsum</p>
                </div>
              </UncontrolledCollapse>
            </div>
            <div className="collapse-con">
              <Button color="nothing" id="toggler4">
                How can I book an extra room ?
                  </Button>
              <UncontrolledCollapse toggler="#toggler4">
                <div className="collapse-body">
                  <p>Lorem Ipsum</p>
                </div>
              </UncontrolledCollapse>
            </div>
            <div className="collapse-con">
              <Button color="nothing" id="toggler5">
                What travel insurance do you recommend ?
                  </Button>
              <UncontrolledCollapse toggler="#toggler5">
                <div className="collapse-body">
                  <p>Lorem Ipsum</p>
                </div>
              </UncontrolledCollapse>
            </div>
            <div className="collapse-con">
              <Button color="nothing" id="toggler6">
                Are there arrangements for physically challenged people ?
                  </Button>
              <UncontrolledCollapse toggler="#toggler6">
                <div className="collapse-body">
                  <p>Lorem Ipsum</p>
                </div>
              </UncontrolledCollapse>
            </div>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-4 text-center">Yo Tour forums</h2>
            <div>
              <Row>
                <Col lg="6" md="8">
                  <Row>
                    <Col md="6" className="mb-4">
                      <Input type="text" className="btn-css" placeholder="Search destination or topic" />
                    </Col>
                    <Col md="6" className="mb-4">
                      <UncontrolledDropdown>
                        <DropdownToggle caret color='border-grey' className="text-left">
                          Latest First
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Latest First</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Old First</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>
                  </Row>
                </Col>
                <Col lg="6" md="4" className="text-md-right mb-4">
                  <Button color="border">Start a new discussion &rarr;</Button>
                </Col>
              </Row>
            </div>
            <div className="table-responsive">
              <table className="table table-borderless table-questions">
                <thead>
                  <tr>
                    <th width="70%">Topic</th>
                    <th width="10%">Replies</th>
                    <th width="30%">Last post</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <NavLink to="" className="text-primary fw-sbold">Coronavirus : What's the situation ?</NavLink>
                      <br />
                      <small>by <NavLink to="" className="text-primary">Meryl Streep</NavLink></small>
                    </td>
                    <td>231</td>
                    <td>27 May 2020<br />
                      <small>by <NavLink to="" className="text-primary">traveldude</NavLink></small></td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink to="" className="text-primary fw-sbold">Coronavirus : What's the situation ?</NavLink>
                      <br />
                      <small>by <NavLink to="" className="text-primary">Meryl Streep</NavLink></small>
                    </td>
                    <td>231</td>
                    <td>27 May 2020<br />
                      <small>by <NavLink to="" className="text-primary">traveldude</NavLink></small></td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink to="" className="text-primary fw-sbold">Coronavirus : What's the situation ?</NavLink>
                      <br />
                      <small>by <NavLink to="" className="text-primary">Meryl Streep</NavLink></small>
                    </td>
                    <td>231</td>
                    <td>27 May 2020<br />
                      <small>by <NavLink to="" className="text-primary">traveldude</NavLink></small></td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink to="" className="text-primary fw-sbold">Coronavirus : What's the situation ?</NavLink>
                      <br />
                      <small>by <NavLink to="" className="text-primary">Meryl Streep</NavLink></small>
                    </td>
                    <td>231</td>
                    <td>27 May 2020<br />
                      <small>by <NavLink to="" className="text-primary">traveldude</NavLink></small></td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink to="" className="text-primary fw-sbold">Coronavirus : What's the situation ?</NavLink>
                      <br />
                      <small>by <NavLink to="" className="text-primary">Meryl Streep</NavLink></small>
                    </td>
                    <td>231</td>
                    <td>27 May 2020<br />
                      <small>by <NavLink to="" className="text-primary">traveldude</NavLink></small></td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink to="" className="text-primary fw-sbold">Coronavirus : What's the situation ?</NavLink>
                      <br />
                      <small>by <NavLink to="" className="text-primary">Meryl Streep</NavLink></small>
                    </td>
                    <td>231</td>
                    <td>27 May 2020<br />
                      <small>by <NavLink to="" className="text-primary">traveldude</NavLink></small></td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink to="" className="text-primary fw-sbold">Coronavirus : What's the situation ?</NavLink>
                      <br />
                      <small>by <NavLink to="" className="text-primary">Meryl Streep</NavLink></small>
                    </td>
                    <td>231</td>
                    <td>27 May 2020<br />
                      <small>by <NavLink to="" className="text-primary">traveldude</NavLink></small></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>
        <Footer />
      </>
    )
  }
}


export default {
  component: CommunityPage
}
