import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from '../../images/banner1.jpg';
import { Card } from 'reactstrap';

class HomeCityCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className } = this.props;
    return (
      <NavLink to="">
        <Card body className={"home-city-card " + className} style={{ backgroundImage: `url(${BannerImg})` }}>
          <div className="offer">Combo Offer</div>
          <div className="bottom-text">
            <h3>Venice</h3>
            <p>39 experiences &rarr;</p>
          </div>
        </Card>
      </NavLink>
    );
  }
}
export default HomeCityCard;
