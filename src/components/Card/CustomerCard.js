import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from '../../images/profile.jpg';
import CommasImg from '../../images/icons/inverted-commas-grey.svg';
import { Card, Button } from 'reactstrap';

class CustomerCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card body className="customer-card">
        <p className="text-left comma-img"><img src={CommasImg} className="rotate90" alt="" /></p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
        <p className="text-right comma-img"><img src={CommasImg} alt="" /></p>
        <h2>Robert Morgan</h2>
        <h4>California, USA</h4>
        <div className="customer-image" style={{ backgroundImage: `url(${BannerImg})` }}></div>
      </Card>
    );
  }
}
export default CustomerCard;
