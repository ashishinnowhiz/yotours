import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BannerHolidayPlace from '../../components/Banner/BannerHolidayPlace';
import ExternalLinkImg from '../../images/external-link.svg';
import TrainImg from '../../images/subway.svg';
import FlightImg from '../../images/airplane.svg';
import TextHoverCard from '../../components/Card/TextHoverCard';
import ReactPlayer from "react-player";
import { Container, Col, Row, Button, Input, Card } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ProductCard from '../../components/Card/ProductCard';
import CalendarSVG from '../../components/svg/calendar-svg'
import HeartSVG from '../../components/svg/heart-svg'
import CommentSVG from '../../components/svg/comment-svg';

class HolidayPlace extends Component {
  render() {
    const BannerImg = "https://image.shutterstock.com/image-vector/dishes-icon-set-260nw-146492768.jpg";
    return (
      <>
        <Header className="on-banner" />
        <BannerHolidayPlace className="no-margin" />
        <section className="py-50 mt-5">
          <Container fluid={true}>
            <Row>
              <Col md="6">
                <h2>Manali - A gift of the Himalayas to the world</h2>
                <p className="fs-18 text-text">
                  Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters.
                </p>
                <h4 className="fw-normal">
                  Imperial Architecture
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam <NavLink className="text-primary" to="">Read more</NavLink>
                </p>
              </Col>
              <Col md="6">
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
            <h2 className="mb-4">Top 10 things to do in Manali</h2>
            <Row>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <TextHoverCard />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <TextHoverCard />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <TextHoverCard />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <TextHoverCard />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <TextHoverCard />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <TextHoverCard />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <TextHoverCard />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <TextHoverCard />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid={true}>
            <h2 className="mb-4">How to reach Manali</h2>
            <Row>
              <Col md="6" className="mb-4">
                <div className="shape-name">
                  <div className="shape-circle img">
                    <img src={TrainImg} alt="" />
                  </div>
                  <div className="shape-text">
                    <p>Nearest Railway station</p>
                    <h3>Joginder Nagar (JDNX) <span className="text-text">- 50km</span> <NavLink to="" className="text-primary"><img src={ExternalLinkImg} className="mt--3px" alt="" /></NavLink></h3>
                  </div>
                </div>
              </Col>
              <Col md="6" className="mb-4">
                <div className="shape-name">
                  <div className="shape-circle img">
                    <img src={FlightImg} alt="" />
                  </div>
                  <div className="shape-text">
                    <p>Nearest Airport</p>
                    <h3>Kullu–Manali Airport (IATA: KUU, ICAO: VIBR), Bhuntar <span className="text-text">- 50km</span> <NavLink to="" className="text-primary"><img src={ExternalLinkImg} className="mt--3px" alt="" /></NavLink></h3>
                  </div>
                </div>
              </Col>
            </Row>
            <ul className="dot-grey">
              <li>Joginder Nagar is a narrow gauge railway station and hence is not connected to all the major cities in the country. The broad gauge railway stations nearest to Manali are in Chandigarh (310 km) and Ambala (300 km).</li>
              <li>Manali can also be reached from Leh by the Leh-Manali route, though it is open for only 4 or 5 months in a year during summers when the snow is removed by the Border Road Organization of India. Still, this road is very picturesque and is one of the most beautiful ways to reach Manali. <NavLink to="" className="text-primary">Check out LEH &rarr;</NavLink></li>
              <li>Buses and taxis are easily available from other parts of North India to Manali.</li>
            </ul>
            <div className="mt-4">
              <p className="text-grey mb-1 fw-bold">Search for directions from</p>
              <div className="search-group">
                <div className="search-input">
                  <Input type="text" placeholder="Enter starting location"></Input>
                </div>
                <div className="search-btn">
                  <Button color="primary">Search&nbsp;&nbsp; &rarr;</Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-4">Must-have local experiences in Manali</h2>
            <Row>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <ProductCard className="no-margin" productclassName="product-card2" />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <ProductCard className="no-margin" productclassName="product-card2" />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <ProductCard className="no-margin" productclassName="product-card2" />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <ProductCard className="no-margin" productclassName="product-card2" />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <ProductCard className="no-margin" productclassName="product-card2" />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <ProductCard className="no-margin" productclassName="product-card2" />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <ProductCard className="no-margin" productclassName="product-card2" />
              </Col>
              <Col lg="3" md="4" sm="6" className="mb-4">
                <ProductCard className="no-margin" productclassName="product-card2" productbutton={true} />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-4">Blogs on Manali</h2>
            <Row>
              <Col md="3" sm="6" className="mb-4">
                <div className='img-effect'>
                  <img
                    className="img-fluid"
                    src={BannerImg}
                    alt=""
                  />
                </div>
                <div className='alternate-left'>
                  <h3 className='bottom-line'>Getting around in Venice</h3>
                  <p className="mb-0">
                    By <span className='text-grey'>Chad Vasquez</span>
                  </p>
                  <p>
                    <span className='icon-text'>
                      <CalendarSVG className='mt--3px mr-1' />
                      27 Ju 2020
                    </span>
                    <span className='icon-text'>
                      <HeartSVG className='mt--3px mr-1' /> 333
                    </span>
                    <span className='icon-text'>
                      <CommentSVG className='mt--3px mr-1' /> 333
                    </span>
                  </p>
                </div>
              </Col>
              <Col md="3" sm="6" className="mb-4">
                <div className='img-effect'>
                  <img
                    className="img-fluid"
                    src={BannerImg}
                    alt=""
                  />
                </div>
                <div className='alternate-left'>
                  <h3 className='bottom-line'>Getting around in Venice</h3>
                  <p className="mb-0">
                    By <span className='text-grey'>Chad Vasquez</span>
                  </p>
                  <p>
                    <span className='icon-text'>
                      <CalendarSVG className='mt--3px mr-1' />
                      27 Ju 2020
                    </span>
                    <span className='icon-text'>
                      <HeartSVG className='mt--3px mr-1' /> 333
                    </span>
                    <span className='icon-text'>
                      <CommentSVG className='mt--3px mr-1' /> 333
                    </span>
                  </p>
                </div>
              </Col>
              <Col md="3" sm="6" className="mb-4">
                <div className='img-effect'>
                  <img
                    className="img-fluid"
                    src={BannerImg}
                    alt=""
                  />
                </div>
                <div className='alternate-left'>
                  <h3 className='bottom-line'>Getting around in Venice</h3>
                  <p className="mb-0">
                    By <span className='text-grey'>Chad Vasquez</span>
                  </p>
                  <p>
                    <span className='icon-text'>
                      <CalendarSVG className='mt--3px mr-1' />
                      27 Ju 2020
                    </span>
                    <span className='icon-text'>
                      <HeartSVG className='mt--3px mr-1' /> 333
                    </span>
                    <span className='icon-text'>
                      <CommentSVG className='mt--3px mr-1' /> 333
                    </span>
                  </p>
                </div>
              </Col>
              <Col md="3" sm="6" className="mb-4">
                <div className='img-effect'>
                  <img
                    className="img-fluid"
                    src={BannerImg}
                    alt=""
                  />
                </div>
                <div className='alternate-left'>
                  <h3 className='bottom-line'>Getting around in Venice</h3>
                  <p className="mb-0">
                    By <span className='text-grey'>Chad Vasquez</span>
                  </p>
                  <p>
                    <span className='icon-text'>
                      <CalendarSVG className='mt--3px mr-1' />
                      27 Ju 2020
                    </span>
                    <span className='icon-text'>
                      <HeartSVG className='mt--3px mr-1' /> 333
                    </span>
                    <span className='icon-text'>
                      <CommentSVG className='mt--3px mr-1' /> 333
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5 bg-grey">
          <Container fluid={true}>
            <h2 className="mb-4 text-white">Check out nearby cities</h2>
            <Row>
              <Col md="3" sm="6" className="mb-4 mb-md-0">
                <NavLink to="">
                  <Card
                    body
                    className="city-card"
                    style={{
                      backgroundImage: `url(${BannerImg})`,
                    }}
                  >
                    <div className="bottom-text">
                      <h3>Rome</h3>
                      <p>26 experiences &rarr;</p>
                    </div>
                  </Card>
                </NavLink>
              </Col>
              <Col md="3" sm="6" className="mb-4 mb-md-0">
                <NavLink to="">
                  <Card
                    body
                    className="city-card"
                    style={{
                      backgroundImage: `url(${BannerImg})`,
                    }}
                  >
                    <div className="bottom-text">
                      <h3>Rome</h3>
                      <p>26 experiences &rarr;</p>
                    </div>
                  </Card>
                </NavLink>
              </Col>
              <Col md="3" sm="6" className="mb-4 mb-md-0">
                <NavLink to="">
                  <Card
                    body
                    className="city-card"
                    style={{
                      backgroundImage: `url(${BannerImg})`,
                    }}
                  >
                    <div className="bottom-text">
                      <h3>Rome</h3>
                      <p>26 experiences &rarr;</p>
                    </div>
                  </Card>
                </NavLink>
              </Col>
              <Col md="3" sm="6" className="mb-4 mb-md-0">
                <NavLink to="">
                  <Card
                    body
                    className="city-card"
                    style={{
                      backgroundImage: `url(${BannerImg})`,
                    }}
                  >
                    <div className="bottom-text">
                      <h3>Rome</h3>
                      <p>26 experiences &rarr;</p>
                    </div>
                  </Card>
                </NavLink>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    )
  }
}


export default {
  component: HolidayPlace
}
