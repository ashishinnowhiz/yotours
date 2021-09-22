import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import TripAdrImg from "../../images/tripadvisor.png";
import CloudyImage from "../../images/cloudy-day.svg";
import SunnyImage from "../../images/sunny-day.svg";
import PayImage from "../../images/pay.svg";
import TentImage from "../../images/tent.svg";
import SupportImage from "../../images/support.svg";
import MedalImage from "../../images/medal.svg";
import { FormattedMessage } from "react-intl";

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className, city, banner, cityId } = this.props;
    return (
      <div className={"banner " + className} style={{ backgroundImage: `url(${banner})` }}>
        <Container fluid={true}>
          <div className="breadcrumb">
            <Button color="nothing">&larr;</Button>
            <ul>
              <li>
                <NavLink to="/">All destinations</NavLink>
              </li>
              <li>&gt;</li>
              <li>{city}</li>
            </ul>
          </div>
          <div className="banner-text">
            <h3><FormattedMessage id="header.LOCAL_EXPERIENCE" /></h3>
            <h1 className="banner-heading">
              {city}{" "}
              <span>
                <img src={TripAdrImg} alt="" />
                3.5 stars <em>(3217 reviews)</em>
              </span>
            </h1>
            <ul className="banner-ul">
              <li className="shape-name">
                <div
                  className="shape-circle image"
                  style={{ backgroundImage: `url(${CloudyImage})` }}
                ></div>
                <div className="shape-text">
                  <p>TODAY</p>
                  <h3>18° C</h3>
                </div>
              </li>
              <li className="shape-name">
                <div
                  className="shape-circle image"
                  style={{ backgroundImage: `url(${SunnyImage})` }}
                ></div>
                <div className="shape-text">
                  <p>TOMORROW</p>
                  <h3>23° C</h3>
                </div>
              </li>
            </ul>
            <ul className="banner-ul1">
              <li>
                <div className="shape-name">
                  <div
                    className="shape-circle"
                    style={{ backgroundImage: `url(${PayImage})` }}
                  ></div>
                  <div className="shape-text">
                    <p>
                      Best Price
                      <br />
                      Guaranteed
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="shape-name">
                  <div
                    className="shape-circle"
                    style={{ backgroundImage: `url(${TentImage})` }}
                  ></div>
                  <div className="shape-text">
                    <p>
                      100% Experience
                      <br />
                      based Tours
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="shape-name">
                  <div
                    className="shape-circle"
                    style={{ backgroundImage: `url(${SupportImage})` }}
                  ></div>
                  <div className="shape-text">
                    <p>
                      24/7 Customer
                      <br />
                      Support
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="shape-name">
                  <div
                    className="shape-circle"
                    style={{ backgroundImage: `url(${MedalImage})` }}
                  ></div>
                  <div className="shape-text">
                    <p>
                      Top rated by
                      <br />
                      travellers
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Container>
        {/* <div className="banner-bottom fix-top"> */}
        <div className="banner-bottom">
          <Container fluid={true}>
            <ul>
              <li>
                <NavLink to="/">
                  <FormattedMessage id="banner.PLAN_TOUR" />
                </NavLink>
              </li>
              <li>
                <NavLink to={`/storytellers/${cityId}`}>
                  <FormattedMessage id="banner.STORYTELLER" />
                </NavLink>
              </li>
              <li>
                <NavLink to={`/cityblogs/${cityId}`}>
                  <FormattedMessage id="banner.CITY_BLOGS" />
                </NavLink>
              </li>
              <li>
                <NavLink to={`/cityvlogs/${cityId}`}>
                  <FormattedMessage id="banner.CITY_VBLOGS" />
                </NavLink>
              </li>
              <li>
                <NavLink to={`/socialmedia/${cityId}`}>
                  <FormattedMessage id="banner.SOCIAL_MEDIA" />
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  <FormattedMessage id="banner.BUSINESS_PARTNER" />
                </NavLink>
              </li>
              <li>
                <Button color="primary">
                  <FormattedMessage id="banner.PART_OF_COMMUNITY" /> &rarr;
                </Button>
              </li>
              <li>
                <Button color="border-orange">
                  <FormattedMessage
                    id="banner.CITY_GUIDE_FOR"
                    values={{ cityName: city }}
                  />{" "}
                  &rarr;
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    );
  }
}
Banner.defaultProps = {
  banner: ''
}
export default Banner;
