import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Button
} from "reactstrap";
import BannerImg from '../../images/banner1.jpg';
import PlaceImg from '../../images/place.svg';

class BannerHolidayCity extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className, city } = this.props;
    return (
      <div className={"bannerholidaycity " + className} style={{ backgroundImage: `url(${ city?.feature_img_link || BannerImg})` }}>
        <Container fluid={true}>
          <div className="breadcrumb">
            <Button color="nothing">&larr;</Button>
            <ul>
              <li>
                <NavLink to="/">Holidays (India)</NavLink>
              </li>
              <li>&gt;</li>
              <li>Kerala</li>
              <li>&gt;</li>
              <li>{city?.name}</li>
            </ul>
          </div>
          <div className="banner-text">
            <h1 className="banner-heading">
            {city?.name}
            </h1>
            <p dangerouslySetInnerHTML={{
                    __html: city?.highlights,
                  }}></p>
            <ul className="banner-ul">
              <li>
                <p className="icon">&#8648;</p>
                <p><small>Peak Season</small></p>
                <p>October - January</p>
              </li>
              <li>
                <p className="icon">&#8650;</p>
                <p><small>Low Season</small></p>
                <p>June - September</p>
              </li>
              <li>
                <p className="icon">&#8646;</p>
                <p><small>Average Season</small></p>
                <p>February - May</p>
              </li>
            </ul>
            <div className="banner-buttons">
              <Button color="border">Download city guide</Button>
              <Button color="border">Share this page</Button>
              <Button color="border">Work with us as a storyteller in this city</Button>
              </div>
          </div>
        </Container>
        <div className="banner-bottom">
          <Container fluid={true}>
            <ul>
              <li>
                <NavLink to="/">
                  <img src={PlaceImg} alt="" />
                  <p>About the place</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <img src={PlaceImg} alt="" />
                  <p>Top 10 things to do</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <img src={PlaceImg} alt="" />
                  <p>Travel Costs</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <img src={PlaceImg} alt="" />
                  <p>Top free experiences</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <img src={PlaceImg} alt="" />
                  <p>Getting around</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <img src={PlaceImg} alt="" />
                  <p>Where to stay and eat</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <img src={PlaceImg} alt="" />
                  <p>More</p>
                </NavLink>
              </li>
              <li>
                <Button color="primary">
                  Book a tour<br />&rarr;
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    );
  }
}
export default BannerHolidayCity;
