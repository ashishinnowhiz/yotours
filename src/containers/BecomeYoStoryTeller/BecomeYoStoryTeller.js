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
import StorytellerTabs from '../../components/Tabs/StorytellerTabs';
class BecomeYoStoryTeller extends Component {
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
            <h2 className="mb-4 text-center">Become a Yo Storyteller</h2>
            <p className="text-center">Our international guide training module is designed to help you become a story teller of international class.</p>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-4 text-center">With Yo Tours, you can</h2>
            <Row>
              <Col md="4" className="mb-4">
                <div className="text-center">
                  <img src="" alt="" />
                  <p className="mt-2">Learn</p>
                </div>
                <ul className="dot-orange">
                  <li>As a storyteller working with Yo Tours, no two days are the same. There are new people to meet and new experiences to share every day.</li>
                  <li>You will be trained on an international training module, to help you become a storyteller of international standard.</li>
                  <li>You will work outside the office in an open environment, in your beloved city, making new friends from across the globe; sharing stories of the city's glorious past, its culture and present day.</li>
                  <li>You will be working in a very professional environment, since yo tours is a highly organized, process driven organization that uses technology to be the market leader.</li>
                </ul>
              </Col>
              <Col md="4" className="mb-4">
                <div className="text-center">
                  <img src="" alt="" />
                  <p className="mt-2">Earn</p>
                </div>
                <ul className="dot-orange">
                  <li>We hire passionate people to work with us as storytellers, every person we appoint needs to sign an MoU with us for an initial period of 3 months/6 months. We pay a handsome stipend and prefer young (only age doesn't make someone young), lively, enthusiastic and passionate people so that they can learn and earn at the same time.</li>
                  <li>Yo Tours also help you establish a name for yourself as a storyteller in your city.</li>
                </ul>
              </Col>
              <Col md="4" className="mb-4">
                <div className="text-center">
                  <img src="" alt="" />
                  <p className="mt-2">Travel</p>
                </div>
                <ul className="dot-orange">
                  <li>At Yo Tours, you will travel with us to different cities and towns in India for work and exploring a city. Frequent cross-training programs are conducted for you to explore, learn and experience new places and people.</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-50 bg-grey">
          <Container fluid={true}>
            <h2 className="mb-4 text-white text-center">The qualities we are looking for</h2>
            <Row>
              <Col md="3" sm="6" className="mb-4 mb-md-0">
                <div className="shape-name shape-number">
                  <div className="shape-circle text">1</div>
                  <div className="shape-text">
                    <p>Passion about exploring a city and its history</p>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6" className="mb-4 mb-md-0">
                <div className="shape-name shape-number">
                  <div className="shape-circle text">2</div>
                  <div className="shape-text">
                    <p>An instinct for storytelling and naturally connecting with people,</p>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6" className="mb-4 mb-md-0">
                <div className="shape-name shape-number">
                  <div className="shape-circle text">3</div>
                  <div className="shape-text">
                    <p>Exceptional presentation skills and the ability to deliver information in an engaging and entertaining manner,</p>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6" className="mb-4 mb-md-0">
                <div className="shape-name shape-number">
                  <div className="shape-circle text">4</div>
                  <div className="shape-text">
                    <p>Genuine interest in sharing this knowledge with others.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr className="my-5 border-white" />
            <p>We don't believe that prior guiding experience is absolutely necessary – if you are an open minded, friendly, outgoing person with great communication skills, we can train you to be a great storyteller. Prior experience in acting, teaching, performing arts or making presentations is ideal but not compulsory.</p>
            <ol className="ol-num-orange">
              <li>Yo Tours only works together with people who are legally allowed to work as per laws applicable in their chosen location. </li>
              <li>Candidates must comply with local laws regarding self-employment and registration. You must have the correct visa that allows this kind of work.</li>
              <li>Candidates should be able to speak English and/or Hindi at a native level.</li>
            </ol>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-4 text-center">Meet our storytellers</h2>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <Row className="mb-4">
              <Col md="6">
                <h2 className="mb-4">How to apply</h2>
              </Col>
              <Col md="6" className="text-md-right">
                <Button color="border">Check out more openings &rarr;</Button>
              </Col>
            </Row>
            <StorytellerTabs />
          </Container>
        </section>
        <Footer />
      </>
    )
  }
}


export default {
  component: BecomeYoStoryTeller
}
