import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from '../../images/banner1.jpg';
import { Card, Button } from 'reactstrap';

class HoneymoonCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavLink to="">
        <Card body className="honeymoon-card" style={{ backgroundImage: `url(${BannerImg})` }}>
          <div className="left-text">
            <h2>Honeymoon getaway in</h2>
            <h1>GOA</h1>
            <h4>5 Days - 6 Nights</h4>
            <h4>Starting @ Rs 9999</h4>
            <div><Button color="primary">Book Now &rarr;</Button></div>
          </div>
        </Card>
      </NavLink>
    );
  }
}
export default HoneymoonCard;
