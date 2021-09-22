import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from '../../images/banner1.jpg';
import { Card } from 'reactstrap';

class CityCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavLink to="">
        <Card body className="city-card" style={{ backgroundImage: `url(${BannerImg})` }}>
          <div className="bottom-text">
            <h3>Venice</h3>
            <p>39 experiences &rarr;</p>
          </div>
        </Card>
      </NavLink>
    );
  }
}
export default CityCard;
