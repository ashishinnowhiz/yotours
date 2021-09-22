import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BannerWalkingTours from '../../components/Banner/BannerWalkingTours';
import HolidayMenu from '../../components/Menu/HolidayMenu';
import { Container, Row, Col, Button } from 'reactstrap';
import ReactPlayer from "react-player";
import CityExperienceCard from '../../components/Card/CityExperienceCard';
import WalkingToursTabs from '../../components/Tabs/WalkingToursTabs';
import HoneymoonCard from '../../components/Card/HoneymoonCard';
import ItineraryCard from '../../components/Card/ItineraryCard';
import WalkingToursImage from '../../images/walking-tours-image.svg';
import ProductMenu from '../../components/Menu/ProductMenu';
import WalkingToursMenu from '../../components/Menu/WalkingToursMenu';

class WalkingTours extends Component {
  render() {
    return (
      <>
        <Header className="on-banner" />
        <BannerWalkingTours className="no-margin" />
        <ProductMenu />
        <section>
          <Container fluid={true}>
            <WalkingToursMenu leftMenuclassName="nav-left-fixed" />
            <div className="nav-right pt-5">
              <div className="nav-right-padding">
                <section className="py-50 mt-5">
                  <h2 className="mb-4">Get the true local experience with our walking tours</h2>
                  <Row>
                    <Col md="6">
                      <ul className="dot-orange">
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero... <NavLink to="" className="text-primary">Read more</NavLink>
                      </p>
                    </Col>
                    <Col md="6">
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=MRI8ffYKA8c"
                        playing={false}
                        width="100%"
                        height="100%"
                        controls
                      />
                    </Col>
                  </Row>
                </section>
              </div>
              <div className="bg-grey py-5 mt-5">
                <div className="nav-right-padding pr-5">
                  <h2 className="mb-3 text-white">What are customers say</h2>
                </div>
              </div>
              <div className="nav-right-padding">
                <section className="py-50 mt-5">
                  <h2 className="mb-4">Walking tours in popular Destinations</h2>
                  <div className="heading-right-tab">
                    <WalkingToursTabs />
                  </div>
                </section>
                <section className="py-50 mt-5">
                  <HoneymoonCard />
                </section>
                <section className="py-50">
                  <h2 className="mb-4">Popular walking tours</h2>
                  <Row>
                    <Col md="3">
                      <CityExperienceCard />
                    </Col>
                    <Col md="3">
                      <CityExperienceCard />
                    </Col>
                    <Col md="3">
                      <CityExperienceCard />
                    </Col>
                    <Col md="3">
                      <CityExperienceCard />
                    </Col>
                  </Row>
                </section>
              </div>
              <div className="bg-grey py-5 mt-5">
                <div className="nav-right-padding pr-5">
                  <section className="py-50">
                    <h2 className="mb-4">Top-rated walking tours</h2>
                    <Row>
                      <Col md="6" className="mb-4">
                        <ItineraryCard />
                      </Col>
                      <Col md="3" className="mb-4">
                        <ItineraryCard />
                      </Col>
                      <Col md="3" className="mb-4">
                        <ItineraryCard />
                      </Col>
                      <Col md="3">
                        <ItineraryCard />
                      </Col>
                      <Col md="6">
                        <ItineraryCard />
                      </Col>
                      <Col md="3">
                        <ItineraryCard className="button-bg" />
                      </Col>
                    </Row>
                  </section>
                </div>
              </div>
              <div className="nav-right-padding">
                <section className="py-50">
                  <Row>
                    <Col md="6">
                      <img src={WalkingToursImage} alt="" />
                    </Col>
                    <Col md="6">
                      <h2>Be a part of a community of conscious travelers</h2>
                      <p>As a Yo Tour community member, you will get</p>
                      <ul className="dash-grey">
                        <li>Lifetime membership for free</li>
                        <li>Save 10% on all tours and activities</li>
                        <li>Exciting offers for community members</li>
                        <li>Get early information on new events and experiences</li>
                      </ul>
                      <p><Button color="primary">Free Lifetime Membership &rarr;</Button></p>
                    </Col>
                  </Row>
                </section>
              </div>
            </div>
            <div className="clearfix"></div>
          </Container>
        </section>
        <Footer />
      </>
    )
  }
}


export default {
  component: WalkingTours
}
