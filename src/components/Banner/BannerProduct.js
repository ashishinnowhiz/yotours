import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";
import { isArray } from "../../helpers/Utils";
import LocationSVG from "../svg/location-svg";
import ReactPlayer from "react-player";
import LeftMenu from "../Menu/LeftMenu";
import EnglishImg from "../../images/country/english.png";
import SpanishImg from "../../images/country/spain.png";
const pricePick = [
  { value: "Adult Price", key: "adult_price" },
  { value: "Child Price", key: "child_price" },
  { value: "Youth Price", key: "youth_price" },
  { value: "Group Price", key: "group_pricing" },
];
class BannerProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPrice: 0,
    };
  }
  componentDidMount() {
    const { productDetails } = this.props;
    const pricing =
      productDetails && productDetails.pricing && productDetails.pricing[0];
    const firstPrice = (pricing && pricing[pricePick[0]["key"]]) || 0;
    this.setState({ selectedPrice: firstPrice });
  }
  handlePriceChange = (e) => {
    this.setState({ selectedPrice: +e.currentTarget.getAttribute("price") });
  };
  render() {
    const { productDetails } = this.props;
    const tour_time = productDetails && productDetails.tour_time;

    const pricing =
      productDetails && productDetails.pricing && productDetails.pricing[0];
    const { selectedPrice } = this.state;
    return (
      <div className="product-banner">
        <Container fluid={true}>
          <div className="breadcrumb">
            <Button color="nothing">&larr</Button>
            <ul>
              <li>
                <NavLink to="/">All destinations</NavLink>
              </li>
              <li>
                <NavLink to={`/City/${productDetails?.product_city?.id}`}>
                  {"> "}
                  {productDetails?.product_city?.name}
                </NavLink>
              </li>
              <li>
                <NavLink to="/">{productDetails?.city}</NavLink>
              </li>
              <li>{">"}</li>
              <li>{productDetails?.product_name}</li>
            </ul>
          </div>
          <div className="mt-4">
            <LeftMenu leftMenuclassName="" />
            <div className="nav-right">
              <div className="nav-right-padding">
                <Row>
                  <Col md="5">
                    <p className="mb-0">
                      <small>
                        <LocationSVG /> {productDetails?.product_city?.name},{" "}
                        {productDetails?.product_country?.name}
                      </small>
                    </p>
                    <h2>{productDetails?.product_name}</h2>
                    <p>
                      <small>75 times booked</small>
                    </p>
                    <Row>
                      <Col md="6">
                        <p className="text-label">Type</p>
                        <p>{productDetails?.category_tour?.name}</p>
                      </Col>
                      <Col md="6">
                        <p className="text-label">Duration</p>
                        <p>
                          {productDetails?.time_duration_slot[0]?.fixed_duration}
                        </p>
                      </Col>
                      <Col md="6">
                        <p className="text-label">Theme</p>
                        <p>{productDetails?.product_theme?.name}</p>
                      </Col>
                      {/* <Col md='6'>
                        <p className='text-label'>Tour runs in</p>
                        <p>
                          <span className='mr-2'>
                            <img
                              src={EnglishImg}
                              className='img-fluid'
                              alt=''
                            />{' '}
                            English
                          </span>
                          <span className='mr-2'>
                            <img
                              src={SpanishImg}
                              className='img-fluid'
                              alt=''
                            />{' '}
                            Spanish
                          </span>
                        </p>
                      </Col> */}
                      <Col md="6">
                        <p className="text-label">Private tours</p>
                        <p>Available</p>
                      </Col>
                      <Col md="6">
                        <p className="text-label">Time slots</p>
                        {isArray(tour_time) &&
                          tour_time.map((timing) => (
                            <p>{`${timing.start_tour_time}, ${timing.end_tour_time}`}</p>
                          ))}
                      </Col>
                      <Col md="12">
                        <div className="d-inline-block mt-4 mr-3 vertical-align-top">
                          <p className="text-label">Price:</p>
                        </div>
                        <div className="d-inline-block mt-4 vertical-align-top">
                          <div className="mb-0">
                            {/* <div className='d-inline-block mr-3'>
                              <p className='text-strike text-text mb-0'>$60</p>
                            </div> */}
                            <div className="d-inline-block">
                              <UncontrolledDropdown>
                                <DropdownToggle caret color="nothing">
                                  {new Intl.NumberFormat("de-DE", {
                                    style: "currency",
                                    currency: `${
                                      (pricing && pricing.currency) || "INR"
                                    }`,
                                  }).format(selectedPrice)}{" "}
                                  onwards
                                </DropdownToggle>
                                <DropdownMenu>
                                  {pricePick.map((price, index) => {
                                    let currentPrice =
                                      (pricing && pricing[price.key]) || 0;
                                    return (
                                      <DropdownItem
                                        key={index}
                                        price={currentPrice}
                                        onClick={this.handlePriceChange}
                                      >
                                        {`${price.value} `}
                                        {new Intl.NumberFormat("de-DE", {
                                          style: "currency",
                                          currency: `${
                                            (pricing && pricing.currency) ||
                                            "INR"
                                          }`,
                                        }).format(currentPrice)}
                                      </DropdownItem>
                                    );
                                  })}
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </div>
                          </div>
                          <p className="text-danger">
                            <small>(Christmas Offer - 15% discount)</small>
                          </p>
                        </div>
                        <div className="mt-3">
                          <Row>
                            <Col md="5">
                              <Button color="primary" block>
                                Book
                              </Button>
                            </Col>
                            <Col md="5">
                              <div className="p text-orange">
                                Today's last booking closes in 03 : 45 : 57
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="7">
                    <div>
                      <ReactPlayer
                        url={productDetails && productDetails.video_link}
                        playing={false}
                        width="100%"
                        height="300px"
                        controls
                      />
                    </div>
                    <div className="mt-4">
                      <Button color="border">Share</Button>
                      <Button color="border">Gift a friend</Button>
                      <Button color="border">
                        Contact us to customize this experience
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </Container>
      </div>
    );
  }
}
export default BannerProduct;
