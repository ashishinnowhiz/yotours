import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from '../../images/banner1.jpg';
import { Card } from 'reactstrap';

class CityCard1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavLink to="">
        <Card body className="city-card" style={{ backgroundImage: `url(${BannerImg})` }}>
          <div className="top-text">
            <p>We are now<br />operational in</p>
            <h3>PARIS</h3>
          </div>
          <div className="bottom-text">
            <p>View Tours &rarr;</p>
          </div>
        </Card>
      </NavLink>
    );
  }
}
export default CityCard1;
