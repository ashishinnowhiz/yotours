import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from '../../images/banner1.jpg';
import { Card } from 'reactstrap';

class HomeCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavLink to="">
        <Card body className="home-card" style={{ backgroundImage: `url(${BannerImg})` }}>
          <div className="bottom-text">
            <h3>Walking Tour</h3>
          </div>
        </Card>
      </NavLink>
    );
  }
}
export default HomeCard;
