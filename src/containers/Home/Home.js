import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Slider from 'react-slick';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col, Button, Input, Card } from 'reactstrap';
import Partner1Img from '../../images/partners/1.png';
import Partner2Img from '../../images/partners/2.png';
import Partner3Img from '../../images/partners/3.png';
import Partner4Img from '../../images/partners/4.png';
import Partner5Img from '../../images/partners/5.png';
import Partner6Img from '../../images/partners/6.png';
import Partner7Img from '../../images/partners/7.png';
import Partner8Img from '../../images/partners/8.png';
import Partner9Img from '../../images/partners/9.png';
import Partner10Img from '../../images/partners/10.png';
import Partner11Img from '../../images/partners/11.png';
import Partner12Img from '../../images/partners/12.png';
import Partner13Img from '../../images/partners/13.png';
import Partner14Img from '../../images/partners/14.png';
import Partner15Img from '../../images/partners/15.png';
import Partner16Img from '../../images/partners/16.png';
import B2b1Img from '../../images/b2b/interview.svg';
import B2b2Img from '../../images/b2b/school.svg';
import B2b3Img from '../../images/b2b/travel.svg';
import B2b4Img from '../../images/b2b/flight-information.svg';
import B2b5Img from '../../images/b2b/room.svg';
import CameraImg from '../../images/photo-camera.svg';
import LocationImg from '../../images/location.svg';
import UserImg from '../../images/user.svg';
import CupImg from '../../images/cup.svg';
import HomeIllusImg from '../../images/home_illus.svg';
import TropAdvisorImg from '../../images/tripadvisor-big.png';
import CityCard from '../../components/Card/CityCard';
import ProductCard from '../../components/Card/ProductCard';
import CustomerCard from '../../components/Card/CustomerCard';
import BannerHome from '../../components/Banner/BannerHome';
import HolidayCarousal from '../../components/carousal/HolidayCarousal';
import CityInterestCard from '../../components/Card/CityInterestCard';
import HolidayCard from '../../components/Card/HolidayCard';
import HomeCard from '../../components/Card/HomeCard';
import LiveExperienceCard from '../../components/Card/LiveExperienceCard';
import HomeTabs from '../../components/Tabs/HomeTabs';
import HomeTabs2 from '../../components/Tabs/HomeTabs2';
import { NavLink } from 'react-router-dom';
import CityVlogCard from '../../components/Card/CityVlogCard';
import GoToTop from '../../components/Footer/GoToTop';
import HomeBannerBottom from '../../components/Menu/HomeBannerBottom';
import TravelAgentImg from '../../images/travel-agent.png';
import StoryTellerImg from '../../images/become-storyteller.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on_banner_add: 'on-banner',
    }
  }
 
  listenScrollEvent = e => {
    if (window.scrollY > 60) {
      this.setState({on_banner_add: ''})
    } else {
      this.setState({on_banner_add: 'on-banner'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }




  render() {
    var settings1 = {
      centerMode: true,
      arrows: false,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: false,
          },
        },
      ],
    };
    var settings2 = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
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
        <Header className={this.state.on_banner_add}/>
        <BannerHome className="no-margin" />
        <HomeBannerBottom className="fixed-bottom" />
        <section className="py-50 mt-5">
          <Container fluid={true}>
            <div className="holiday-carousal-container">
              <HolidayCarousal />
            </div>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-3 text-center">
              Browse by experience categories
            </h2>
            <p className="text-center">
              We provide fun-packed and enthralling travel experiences in <br />{' '}
              more than 55 cities around the world
            </p>
            <div className="home-design1">
              <div className="home-design-left">
                <div className="design1">
                  <h3>Local Experiences</h3>
                  <div className="mb-3">
                    <HomeCard />
                  </div>
                  <div className="mb-3">
                    <HomeCard />
                  </div>
                </div>
                <div className="design2">
                  <div className="mb-3">
                    <HomeCard />
                  </div>
                  <div className="mb-3">
                    <HomeCard />
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="home-design-right">
                <div className="design2">
                  <h3>Holiday Packages</h3>
                  <div className="mb-3">
                    <HomeCard />
                  </div>
                  <div className="mb-3">
                    <HomeCard />
                  </div>
                </div>
                <div className="design1">
                  <h3>Holiday Packages</h3>
                  <div className="mb-3">
                    <HomeCard />
                  </div>
                  <div className="mb-3">
                    <HomeCard />
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
            </div>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-4 text-center">
              Local Experiences for every interest
            </h2>
            <Row>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <CityInterestCard />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-50">
          <Container fluid={true}>
            <h2 className="mb-4 text-center">
              Holiday packages to serve every mood
            </h2>
            <Row>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
              <Col lg="2" md="4" sm="6" xs="12">
                <HolidayCard />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid={true}>
            <Row className="mb-4">
              <Col lg="4" md="6">
                <h2 className="mb-3">Experience live at your home</h2>
                <p className="">
                  Don't like to step out of your house? Don't worry, we have
                  live experiences for you to enjoy at your home.
                </p>
              </Col>
              <Col lg="8" md="6" className="text-md-right">
                <Button color="border">View all live experiences &rarr;</Button>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="6">
                <LiveExperienceCard />
              </Col>
              <Col lg="3" md="6">
                <LiveExperienceCard />
              </Col>
              <Col lg="3" md="6">
                <LiveExperienceCard />
              </Col>
              <Col lg="3" md="6">
                <LiveExperienceCard />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid={true}>
            <div className="home-tabs-container">
              <div className="home-heading text-lg-right">
                <h2 className="mb-3">Explore the world with us</h2>
                <p>
                  We provide fun-packed and enthralling travel experiences in
                  more than 55 cities around the world
                </p>
                <Button color="border">View all destinations &rarr;</Button>
              </div>
              <HomeTabs />
            </div>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid={true}>
            <div className="home-tabs-container">
              <div className="home-heading text-lg-right">
                <h2 className="mb-3">Check out our top-selling experiences</h2>
                <p>
                  We provide fun-packed and enthralling travel experiences in
                  more than 55 cities around the world
                </p>
                <Button color="border">View all experiences &rarr;</Button>
              </div>
              <HomeTabs2 />
            </div>
          </Container>
        </section>
        <section className="py-5 bg-light">
          <Container fluid={true}>
            <h2 className="mb-3 heading-view-all">
              Check out our top-selling experiences
              <NavLink className="view-all" to="">
                View All
              </NavLink>
            </h2>
            <Slider {...settings2}>
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
            </Slider>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid={true}>
            <Row>
              <Col md="6">
                <img src="" alt="" className="img-fluid mb-md-0 mb-4" />
              </Col>
              <Col md="6">
                <h2 className="mb-3">
                  Explore our experiences at your fingertips
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et
                </p>
                <h5>GET IT ON</h5>
                <div className="mb-4">
                  <Button
                    color="nothing"
                    className="box-shadow border p-3 mr-3 mb-3"
                  >
                    Google Play
                  </Button>
                  <Button
                    color="nothing"
                    className="box-shadow border p-3 mr-3 mb-3"
                  >
                    Google Play
                  </Button>
                </div>
                <p className="mb-0">Or send the download link to your phone</p>
                <div className="search-group">
                  <div className="search-input">
                    <Input
                      type="text"
                      placeholder="Enter your phone number"
                    ></Input>
                  </div>
                  <div className="search-btn">
                    <Button color="primary">Send</Button>
                  </div>
                </div>
                <p>
                  <small>**Messaging and data rates may apply</small>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5 bg-grey">
          <Container fluid={true}>
            <Row className="mb-4">
              <Col md="6">
                <h2 className="mb-3 text-white">Featured videos</h2>
              </Col>
              <Col md="6" className="text-md-right">
                <Button color="border">View more videos &rarr;</Button>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <CityVlogCard cardclassName="dark" />
              </Col>
              <Col md="6">
                <CityVlogCard cardclassName="light" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid={true}>
            <Row>
              <Col md="6">
                <img
                  src={HomeIllusImg}
                  alt=""
                  className="img-fluid mb-4 mb-md-0"
                />
              </Col>
              <Col md="6">
                <h2 className="mb-3">
                  Be a part of a community of conscious travelers
                </h2>
                <p>As a Yo Tour community member, you will get</p>
                <ul className="dash-grey">
                  <li>Lifetime membership for free</li>
                  <li>Exciting offers for community members</li>
                  <li>Added features for personalized tours</li>
                  <li>Get early information on new events and experiences</li>
                </ul>
                <Button color="primary">Free Lifetime Membership &rarr;</Button>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5 bg-light my-5">
          <Container fluid={true}>
            <Row className="mb-4">
              <Col md="6">
                <h2 className="mb-3">Our achievements</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                  eiusmod tempor incididunt ut labore
                </p>
              </Col>
              <Col md="6" className="text-md-right">
                <Button color="border">Know more about us &rarr;</Button>
              </Col>
            </Row>
            <Row>
              <Col md="3" sm="6" className="mb-4">
                <div className="shape-name">
                  <div className="shape-circle img">
                    <img src={CameraImg} alt="" />
                  </div>
                  <div className="shape-text">
                    <h3>1000+</h3>
                    <p>Own experiences</p>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6" className="mb-4">
                <div className="shape-name">
                  <div className="shape-circle img">
                    <img src={UserImg} alt="" />
                  </div>
                  <div className="shape-text">
                    <h3>24,000+</h3>
                    <p>Customers</p>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6" className="mb-4">
                <div className="shape-name">
                  <div className="shape-circle img">
                    <img src={LocationImg} alt="" />
                  </div>
                  <div className="shape-text">
                    <h3>55+</h3>
                    <p>Destinations</p>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6" className="mb-4">
                <div className="shape-name">
                  <div className="shape-circle img">
                    <img src={CupImg} alt="" />
                  </div>
                  <div className="shape-text">
                    <h3>3</h3>
                    <p>International Awards</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid={true}>
            <Row className="mb-4">
              <Col lg="4" md="6">
                <h2 className="mb-3">What our customers say about us</h2>
                <p className="">
                  Join YoTours family and be a part of the extravaganza
                </p>
              </Col>
              <Col lg="4" md="6">
                <div className="trip-advisor mb-4 mb-lg-0">
                  <p>
                    Rated 'excellent' by travelers on{' '}
                    <img className="mt--3px" src={TropAdvisorImg} alt="" />
                  </p>
                </div>
              </Col>
              <Col lg="4" className="text-lg-right">
                <Button color="border">See all reviews &rarr;</Button>
              </Col>
            </Row>
            <Slider {...settings1} className="home-center-slider">
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
            </Slider>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid={true}>
            <Row className="mb-4">
              <Col lg="5" md="6">
                <h2 className="mb-3">B-2-B Services</h2>
                <p className="">
                  To always strive to make a delightful, exciting and memorable
                  experience for the traveler is our only goal
                </p>
              </Col>
              <Col lg="7" md="6" className="text-md-right">
                <Button color="border">Sell our experiences &rarr;</Button>
              </Col>
            </Row>
            <Row>
              <Col lg="1"></Col>
              <Col lg="2" md="4" sm="6" className="mb-4">
                <div className="b2b-service">
                  <div>
                    <img src={B2b1Img} alt="" />
                  </div>
                  <h4>MICE</h4>
                </div>
              </Col>
              <Col lg="2" md="4" sm="6" className="mb-4">
                <div className="b2b-service">
                  <div>
                    <img src={B2b2Img} alt="" />
                  </div>
                  <h4>Educational Institutions</h4>
                </div>
              </Col>
              <Col lg="2" md="4" sm="6" className="mb-4">
                <div className="b2b-service">
                  <div>
                    <img src={B2b3Img} alt="" />
                  </div>
                  <h4>Corporate Travel</h4>
                </div>
              </Col>
              <Col lg="2" md="4" sm="6" className="mb-4">
                <div className="b2b-service">
                  <div>
                    <img src={B2b4Img} alt="" />
                  </div>
                  <h4>Travel Agents</h4>
                </div>
              </Col>
              <Col lg="2" md="4" sm="6" className="mb-4">
                <div className="b2b-service">
                  <div>
                    <img src={B2b5Img} alt="" />
                  </div>
                  <h4>Accomodation Partners</h4>
                </div>
              </Col>
              <Col lg="1"></Col>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container fluid={true}>
            <h2 className="mb-3 text-center">Wanna be a part of us ?</h2>
            <p className="text-center">
              Join YoTours family and be a part of the extravaganza
            </p>
            <Row>
              <Col md="6" className="mb-4">
                <NavLink to="/storyteller">
                  <Card
                    body
                    className="city-card"
                    style={{ backgroundImage: `url(${StoryTellerImg})` }}
                  >
                    <div className="bottom-text">
                      <h3>Become a storyteller</h3>
                      <p>Apply now &rarr;</p>
                    </div>
                  </Card>
                </NavLink>
              </Col>
              <Col md="6" className="mb-4">
                <NavLink to="/storyteller">
                  <Card
                    body
                    className="city-card"
                    style={{ backgroundImage: `url(${TravelAgentImg})` }}
                  >
                    <div className="bottom-text">
                      <h3>Become a travel agent</h3>
                      <p>Start earning now &rarr;</p>
                    </div>
                  </Card>
                </NavLink>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5 partners-sec">
          <Container fluid={true}>
            <h2 className="mb-3 text-center">Our Partners</h2>
            <Row>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner1Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner2Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner3Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner4Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner5Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner6Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner7Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner8Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner9Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner10Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner11Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner12Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner13Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner14Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner15Img} alt="" />
              </Col>
              <Col xl="2" lg="3" md="4" sm="6" className="mb-4">
                <img src={Partner16Img} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
        <GoToTop />
      </>
    );
  }
}

export default {
  component: Home,
};
