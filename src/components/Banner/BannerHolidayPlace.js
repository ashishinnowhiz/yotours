import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Button
} from "reactstrap";
import CloudyImage from "../../images/cloudy-day.svg";
import SunnyImage from "../../images/sunny-day.svg";
import BannerImg from '../../images/banner1.jpg';

class BannerHolidayPlace extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className } = this.props;
    return (
      <div className={"banner-holiday-place " + className} style={{ backgroundImage: `url(${BannerImg})` }}>
        <Container fluid={true}>
          <div className="breadcrumb">
            <Button color="nothing">&larr;</Button>
            <ul>
              <li>
                <NavLink to="/">Holidays (India)</NavLink>
              </li>
              <li>&gt;</li>
              <li><NavLink to="/">Kerala</NavLink></li>
              <li>&gt;</li>
              <li><NavLink to="/">Manali</NavLink></li>
              <li>&gt;</li>
              <li>Periyar Wildlife Sanctuary</li>
            </ul>
          </div>
          <div className="banner-text">
            <h1 className="banner-heading">
              Periyar Wildlife Sanctuary
            </h1>
            <p>Periyar National Park, also known as Periyar Tiger Reserve, is in the mountainous Western Ghats of Kerala, southern India. This wildlife sanctuary is home to tigers and a significant elephant population, as well as rare lion-tailed macaques, sambar deer, leopards and Indian bison.</p>
            <ul className="banner-ul">
              <li className="shape-name">
                <div
                  className="shape-circle image"
                  style={{ backgroundImage: `url(${CloudyImage})` }}
                ></div>
                <div className="shape-text">
                  <p>TIMINGS</p>
                  <p className="text-white">10 AM - 6 PM (Sun &amp; Wed)</p>
                  <p className="text-white">9 AM - 7 PM (All other days)</p>
                </div>
              </li>
              <li className="shape-name">
                <div
                  className="shape-circle image"
                  style={{ backgroundImage: `url(${SunnyImage})` }}
                ></div>
                <div className="shape-text">
                  <p>ENTERANCE FEE</p>
                  <p className="text-white">Rs.50 (Indian Nationals)</p>
                  <p className="text-white">Rs.200 (Foreign Nationals)</p>
                </div>
              </li>
            </ul>
            <div  className="mt-4">
              <Button color="primary">Book entrance tickets &rarr;</Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default BannerHolidayPlace;
