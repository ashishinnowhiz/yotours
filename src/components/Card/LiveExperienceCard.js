import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from '../../images/banner1.jpg';
import { Card } from 'reactstrap';

class LiveExperienceCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavLink to="">
        <Card body className="live-experience-card" style={{ backgroundImage: `url(${BannerImg})` }}>
          <div className="bottom-box" style={{ backgroundImage: `url(${BannerImg})` }}>
            <p><span className="live-bg">Live</span> from Paris</p>
            <h2>The tale of Eiffel</h2>
            <p className="bottom-text">with Akeria</p>
          </div>
        </Card>
      </NavLink>
    );
  }
}
export default LiveExperienceCard;
